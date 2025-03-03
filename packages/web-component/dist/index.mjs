// src/page-builder.ts
import { PageBuilderCore } from "core";
var PageBuilderElement = class extends HTMLElement {
  constructor() {
    super();
    this.core = new PageBuilderCore({ components: {} });
  }
  connectedCallback() {
    this.innerHTML = `<div>Page Builder Web Component</div>`;
  }
  setConfig(config) {
    this.core = new PageBuilderCore(config);
    console.log("Updated config:", config);
  }
};
if (!customElements.get("page-builder")) {
  customElements.define("page-builder", PageBuilderElement);
}
//# sourceMappingURL=index.mjs.map