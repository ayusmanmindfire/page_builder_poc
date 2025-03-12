// src/components/PageBuilder.tsx
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
var PageBuilderReact = ({ config, reactComponents }) => {
  const builderRef = useRef(null);
  useEffect(() => {
    import("web-component").catch((error) => {
      console.error("Failed to load web component:", error);
    });
  }, []);
  useEffect(() => {
    if (builderRef.current) {
      console.log("Config in React wrapper:", config);
      const wrappedComponents = {};
      Object.entries(reactComponents).forEach(([key, Component]) => {
        const tagName = `react-component-${key.toLowerCase()}`;
        if (!customElements.get(tagName)) {
          class ReactComponentElement extends HTMLElement {
            connectedCallback() {
              const mountPoint = document.createElement("div");
              this.appendChild(mountPoint);
              ReactDOM.createRoot(mountPoint).render(/* @__PURE__ */ React.createElement(Component, null));
            }
          }
          customElements.define(tagName, ReactComponentElement);
        }
        wrappedComponents[key] = tagName;
      });
      builderRef.current.setAttribute("config-data", JSON.stringify(config));
      builderRef.current.reactComponents = wrappedComponents;
    }
  }, [config, reactComponents]);
  return /* @__PURE__ */ React.createElement("page-builder", { ref: builderRef });
};
export {
  PageBuilderReact
};
//# sourceMappingURL=index.mjs.map