import React from "react";
import ReactDOM from "react-dom/client";

export class PageBuilderCore {
  private components;
  private reactComponents: Record<string, any>; //  Store React components
  private reactRoot: ReactDOM.Root | null = null;

  constructor(config: { components: Record<string, any> }, reactComponents: Record<string, any> = {}) {
    this.components = config.components;
    this.reactComponents = reactComponents;

    console.log(" PageBuilderCore received React components:", this.reactComponents);
    console.log("Components in core: ",this.components)

    this.render();
  }

  private render() {
    const container = document.getElementById("canvas");

    if (!container) {
      console.error(" No #canvas found. Cannot render.");
      return;
    }

    // Create a div for React components if it doesn't exist
    let reactContainer = document.getElementById("react-container");
    if (!reactContainer) {
      reactContainer = document.createElement("div");
      reactContainer.id = "react-container";
      container.appendChild(reactContainer);
    }

    if (!this.reactRoot) {
      this.reactRoot = ReactDOM.createRoot(reactContainer);
    }


    // Validate that reactComponents are functions (React components)
    const reactElements = Object.entries(this.reactComponents).map(([key, Component]) => {
      if (typeof Component !== "function") {
        console.warn(`Skipping invalid component: ${key}`, Component);
        return null;
      }
      return React.createElement(Component, { key, label: `Button from core` });
    }).filter(Boolean); // Remove null values

    if (reactElements.length === 0) {
      console.warn("No valid React components found.");
      return;
    }

    // Render React Components inside the vanilla container
    this.reactRoot.render(React.createElement("div", null, ...reactElements));
  }
}
