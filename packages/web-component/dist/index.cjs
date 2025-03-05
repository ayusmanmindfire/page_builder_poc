"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
module.exports = __toCommonJS(index_exports);

// src/PageBuilder.ts
var import_core = require("core");
var PageBuilderElement = class extends HTMLElement {
  constructor() {
    super();
    this.core = null;
    this._config = { components: {} };
    this.core = new import_core.PageBuilderCore(this._config);
  }
  // Use observedAttributes to monitor the config-data attribute
  static get observedAttributes() {
    return ["config-data"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "config-data" && newValue !== oldValue) {
      try {
        const parsedConfig = JSON.parse(newValue);
        this._config = parsedConfig;
        this.core = new import_core.PageBuilderCore(parsedConfig);
        console.log("\u2705 Config received in Web Component:", parsedConfig);
        this.render();
      } catch (e) {
        console.error("Failed to parse config:", e);
      }
    }
  }
  connectedCallback() {
    console.log("\u2705 Web Component Mounted");
    this.render();
  }
  render() {
    this.innerHTML = `
      <div>
        <h3>Page Builder Web Component</h3>
        <pre>${JSON.stringify(this._config, null, 2)}</pre>
      </div>
    `;
  }
};
if (!customElements.get("page-builder")) {
  customElements.define("page-builder", PageBuilderElement);
}
//# sourceMappingURL=index.cjs.map