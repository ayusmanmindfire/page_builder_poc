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
    this.initialized = false;
    this._config = { components: {} };
    this._reactComponents = {};
    // Storing React components
    this.template = `<div id="app">
      <div id="sidebar"></div>
      <div id="canvas" class="canvas"></div>
      <div id="customization">
        <h4 id="component-name">Component: None</h4>
        <div id="controls"></div>
        <div id="layers-view" class="hidden"></div>
      </div>
      <div id="notification" class="notification hidden"></div>
      <div id="dialog" class="dialog hidden">
        <div class="dialog-content">
          <p id="dialog-message"></p>
          <button id="dialog-yes" class="dialog-btn">Yes</button>
          <button id="dialog-no" class="dialog-btn">No</button>
        </div>
      </div>
    </div>`;
    if (!this.firstElementChild) {
      this.innerHTML = this.template;
    }
  }
  static get observedAttributes() {
    return ["config-data"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "config-data" && newValue !== oldValue) {
      try {
        const parsedConfig = JSON.parse(newValue);
        this._config = parsedConfig;
        console.log("Config received in Web Component:", parsedConfig);
        console.log("react components in Web Component:", this.reactComponents);
        this.initializeCore();
      } catch (e) {
        console.error(" Failed to parse config:", e);
      }
    }
  }
  set reactComponents(value) {
    this._reactComponents = value;
  }
  get reactComponents() {
    return this._reactComponents;
  }
  // Ensures Core gets updated values (No updateConfig method)
  initializeCore() {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    this.core = new import_core.PageBuilderCore(this._config, this.reactComponents);
  }
  connectedCallback() {
    if (this.initialized) {
      return;
    }
    console.log(" Web Component Mounted");
    this.initializeCore();
  }
};
if (!customElements.get("page-builder")) {
  customElements.define("page-builder", PageBuilderElement);
}
//# sourceMappingURL=index.cjs.map