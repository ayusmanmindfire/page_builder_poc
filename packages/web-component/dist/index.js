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

// src/page-builder.ts
var import_core = require("core");
var PageBuilderElement = class extends HTMLElement {
  constructor() {
    super();
    this.core = new import_core.PageBuilderCore({ components: {} });
  }
  connectedCallback() {
    this.innerHTML = `<div>Page Builder Web Component</div>`;
  }
  setConfig(config) {
    this.core = new import_core.PageBuilderCore(config);
    console.log("Updated config:", config);
  }
};
if (!customElements.get("page-builder")) {
  customElements.define("page-builder", PageBuilderElement);
}
//# sourceMappingURL=index.js.map