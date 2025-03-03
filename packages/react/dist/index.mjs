// src/components/PageBuilder.tsx
import React, { useEffect, useRef } from "react";
var PageBuilderReact = ({ config = { components: {} } }) => {
  const builderRef = useRef(null);
  useEffect(() => {
    import("web-component").catch((error) => {
      console.error("Failed to load web component:", error);
    });
  }, []);
  useEffect(() => {
    if (builderRef.current) {
      builderRef.current.setAttribute("config-data", JSON.stringify(config));
      console.log("Config in react wrapper:", config);
    }
  }, [config]);
  return /* @__PURE__ */ React.createElement("page-builder", { ref: builderRef });
};
export {
  PageBuilderReact
};
//# sourceMappingURL=index.mjs.map