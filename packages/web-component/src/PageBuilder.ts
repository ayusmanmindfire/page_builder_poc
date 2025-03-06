import { PageBuilderCore } from "core";

class PageBuilderElement extends HTMLElement {
  private core: PageBuilderCore | null = null;
  private initialized = false;
  private _config: { components: Record<string, any> } = { components: {} };
  private _reactComponents = {}; // Storing React components

  private template = `<div id="app">
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

  constructor() {
    super();
    // Set inner HTML only if no child elements exist
    if (!this.firstElementChild) {
      this.innerHTML = this.template;
    }
  }

  static get observedAttributes() {
    return ["config-data"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "config-data" && newValue !== oldValue) {
      try {
        const parsedConfig = JSON.parse(newValue);
        this._config = parsedConfig;
        console.log("Config received in Web Component:", parsedConfig);
        console.log("react components in Web Component:", this.reactComponents);
        this.initializeCore(); // Reinitialize Core when config changes
      } catch (e) {
        console.error(" Failed to parse config:", e);
      }
    }
  }

  set reactComponents(value) {
    this._reactComponents = value;
    // this.initializeCore(); // Reinitialize Core when React components change
  }

  get reactComponents() {
    return this._reactComponents;
  }

  // Ensures Core gets updated values (No updateConfig method)
  initializeCore() {
    if (this.initialized) {
      return;
    }
    this.initialized=true;
    this.core = new PageBuilderCore(this._config, this.reactComponents);
  }

  connectedCallback() {
    if (this.initialized) {
      return;
    }
    console.log(" Web Component Mounted");
    this.initializeCore();
  }

}

if (!customElements.get("page-builder")) {
  customElements.define("page-builder", PageBuilderElement);
}