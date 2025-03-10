export class PageBuilderCore {
  private components;
  private customComponents: Record<string, any>; 
  private container: HTMLElement | null = null;
  private customComponentContainer: HTMLElement | null = null;

  constructor(config: { components: Record<string, any> }, customComponents: Record<string, any> = {}) {
    this.components = config.components;
    this.customComponents = customComponents;

    console.log("PageBuilderCore received component factories:", this.customComponents);
    console.log("Components in core: ", this.components);

    this.render();
  }

  private render() {
    this.container = document.getElementById("canvas");

    if (!this.container) {
      console.error("No #canvas found. Cannot render.");
      return;
    }

    // Create a div for our components if it doesn't exist
    this.customComponentContainer = document.getElementById("custom-container");
    if (!this.customComponentContainer) {
      this.customComponentContainer = document.createElement("div");
      this.customComponentContainer.id = "custom-container";
      this.container.appendChild(this.customComponentContainer);
    } else {
      // Clear existing content if container already exists
      this.customComponentContainer.innerHTML = '';
    }

    // Creation of wrapper div
    const wrapperDiv = document.createElement("div");
    
    // Process each component factory
    Object.entries(this.customComponents).forEach(([key, componentFactory]) => {
      if (typeof componentFactory !== "function") {
        console.warn(`Skipping invalid component: ${key}`, componentFactory);
        return;
      }
      
      try {
        // Calling the factory function with props to get the component structure
        const props = { key, label: `Button from core` };
        const componentStructure = componentFactory(props);
        
        // Convert the virtual component structure to actual DOM elements
        const domElement = this.createDOMFromComponentStructure(componentStructure);
        if (domElement) {
          // Add key as a data attribute for identification
          domElement.setAttribute('data-component-key', key);
          wrapperDiv.appendChild(domElement);
        } 
      } catch (error) {
        console.error(`Error rendering component ${key}:`, error);
      }
    });

    // Append the wrapper with all components to the container
    if (wrapperDiv.children.length === 0) {
      console.warn("No valid components were rendered.");
    } else {
      this.customComponentContainer.appendChild(wrapperDiv);
    }
  }

  private createDOMFromComponentStructure(structure: any): HTMLElement | null {
    if (!structure) return null;

    // Handle text nodes
    if (typeof structure === 'string' || typeof structure === 'number') {
      return document.createTextNode(String(structure)) as unknown as HTMLElement;
    }

    // Handle arrays (like children arrays)
    if (Array.isArray(structure)) {
      const fragment = document.createDocumentFragment();
      structure.forEach(item => {
        const child = this.createDOMFromComponentStructure(item);
        if (child) fragment.appendChild(child);
      });
      return fragment as unknown as HTMLElement;
    }

    // Handle component objects with type and props
    if (structure && typeof structure === 'object') {
      // Extract type and props
      const { type, props = {} } = structure;
      
      if (!type) return null;
      
      // Handle element type (string like 'div', 'button', etc.)
      if (typeof type === 'string') {
        const element = document.createElement(type);
        
        // Apply props/attributes
        Object.entries(props).forEach(([propName, propValue]) => {
          // Skip children and key props as they're handled separately
          if (propName === 'children' || propName === 'key') return;
          
          // Handle event handlers (props starting with 'on')
          if (propName.startsWith('on') && typeof propValue === 'function') {
            const eventName = propName.substring(2).toLowerCase();
            element.addEventListener(eventName, propValue as EventListener);
            return;
          }
          
          // Handle className specially
          if (propName === 'className') {
            element.className = propValue as string;
            return;
          }
          
          // Handle style object
          if (propName === 'style' && typeof propValue === 'object') {
            Object.entries(propValue as object).forEach(([styleName, styleValue]) => {
              (element.style as any)[styleName] = styleValue;
            });
            return;
          }
          
          // Set other attributes
          element.setAttribute(propName, String(propValue));
        });
        
        // Handle children
        if (props.children) {
          const children = Array.isArray(props.children) ? props.children : [props.children];
          children.forEach((child:any) => {
            const childElement = this.createDOMFromComponentStructure(child);
            if (childElement) element.appendChild(childElement);
          });
        }
        
        return element;
      }
      
      // Handle functional components
      if (typeof type === 'function') {
        try {
          const result = type(props);
          return this.createDOMFromComponentStructure(result);
        } catch (error) {
          console.error('Error rendering functional component:', error);
          return null;
        }
      }
    }
    
    return null;
  }
}