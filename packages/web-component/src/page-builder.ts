import { PageBuilderCore } from "core";

class PageBuilderElement extends HTMLElement {
  private core: PageBuilderCore;

  constructor() {
    super();
    this.core = new PageBuilderCore({ components: {} });
  }

  connectedCallback() {
    this.innerHTML = `<div>Page Builder Web Component</div>`;
  }

  setConfig(config: { components: Record<string, any> }) {
    this.core = new PageBuilderCore(config);
    console.log("Updated config:", config);
  }
}

if (!customElements.get('page-builder')) {
  customElements.define("page-builder", PageBuilderElement);
}
