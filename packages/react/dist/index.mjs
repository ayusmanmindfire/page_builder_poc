// src/index.tsx
import React, { useEffect } from "react";
var PageBuilderReact = () => {
  useEffect(() => {
    import("web-component");
  }, []);
  return React.createElement("page-builder-element", null);
};
export {
  PageBuilderReact
};
//# sourceMappingURL=index.mjs.map