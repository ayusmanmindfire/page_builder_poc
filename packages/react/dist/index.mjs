// src/components/PageBuilder.tsx
import React, { useEffect, useRef } from "react";
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
      console.log("React Components in React wrapper:", reactComponents);
      builderRef.current.setAttribute("config-data", JSON.stringify(config));
      builderRef.current.reactComponents = reactComponents;
    }
  }, [config, reactComponents]);
  return /* @__PURE__ */ React.createElement("page-builder", { ref: builderRef });
};
export {
  PageBuilderReact
};
//# sourceMappingURL=index.mjs.map