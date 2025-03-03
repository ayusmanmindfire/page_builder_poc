// src/PageBuilder.ts
import { PageBuilderCore } from "core";
var PageBuilderElement = class extends HTMLElement {
  constructor() {
    super();
    this.core = null;
    this._config = { components: {} };
    this.core = new PageBuilderCore(this._config);
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
        this.core = new PageBuilderCore(parsedConfig);
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
//# sourceMappingURL=index.js.map