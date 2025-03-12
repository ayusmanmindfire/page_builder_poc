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
  
    // Wrapper div for all components
    const wrapperDiv = document.createElement("div");
  
    // Render each Web Component
    Object.entries(this.customComponents).forEach(([key, tagName]) => {
      if (typeof tagName !== "string") {
        console.warn(`Skipping invalid component tag: ${key}`, tagName);
        return;
      }
  
      try {
        // Create the custom element using the tag name
        const customElement = document.createElement(tagName);
        customElement.setAttribute("data-component-key", key);
        customElement.setAttribute("label", `Label for ${key}`); // Pass label as an attribute
        wrapperDiv.appendChild(customElement);
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
}