import { PageBuilderCore } from "@page-builder/core";

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

customElements.define("page-builder-element", PageBuilderElement);
