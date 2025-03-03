import { PageBuilderCore } from "core";

class PageBuilderElement extends HTMLElement {
  private core: PageBuilderCore | null = null;
  private _config: { components: Record<string, any> } = { components: {} };

  constructor() {
    super();
    this.core = new PageBuilderCore(this._config);
  }

  // Use observedAttributes to monitor the config-data attribute
  static get observedAttributes() {
    return ['config-data'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'config-data' && newValue !== oldValue) {
      try {
        const parsedConfig = JSON.parse(newValue);
        this._config = parsedConfig;
        this.core = new PageBuilderCore(parsedConfig);
        console.log("✅ Config received in Web Component:", parsedConfig);
        this.render();
      } catch (e) {
        console.error("Failed to parse config:", e);
      }
    }
  }

  connectedCallback() {
    console.log("✅ Web Component Mounted");
    this.render();
  }

  render() {
    // Render the entire config object as a pre-formatted JSON string
    this.innerHTML = `
      <div>
        <h3>Page Builder Web Component</h3>
        <pre>${JSON.stringify(this._config, null, 2)}</pre>
      </div>
    `;
  }
}

// Ensure the Web Component is registered
if (!customElements.get("page-builder")) {
  customElements.define("page-builder", PageBuilderElement);
}