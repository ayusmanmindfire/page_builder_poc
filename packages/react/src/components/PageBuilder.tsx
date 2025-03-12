import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

interface PageBuilderConfig {
  theme?: string;
  grid?: boolean;
  components: Record<string, any>;
}

interface PageBuilderReactProps {
  config: PageBuilderConfig;
  reactComponents: Record<string, React.FC<any>>;
}

export const PageBuilderReact: React.FC<PageBuilderReactProps> = ({ config, reactComponents }) => {
  const builderRef = useRef<HTMLElement>(null);

  useEffect(() => {
    import("web-component").catch(error => {
      console.error("Failed to load web component:", error);
    });
  }, []);

  useEffect(() => {
    if (builderRef.current) {
      console.log("Config in React wrapper:", config);

      // Convert React components into web components
      const wrappedComponents: Record<string, string> = {};
      Object.entries(reactComponents).forEach(([key, Component]) => {
        const tagName = `react-component-${key.toLowerCase()}`;

        if (!customElements.get(tagName)) {
          class ReactComponentElement extends HTMLElement {
            connectedCallback() {
              const mountPoint = document.createElement("div");
              this.appendChild(mountPoint);
              ReactDOM.createRoot(mountPoint).render(<Component />);
            }
          }
          customElements.define(tagName, ReactComponentElement);
        }

        wrappedComponents[key] = tagName; // Store the tag name
      });

      builderRef.current.setAttribute("config-data", JSON.stringify(config)); // Pass config
      (builderRef.current as any).reactComponents = wrappedComponents; // Pass tag names
    }
  }, [config, reactComponents]);

  return <page-builder ref={builderRef} />;
};
