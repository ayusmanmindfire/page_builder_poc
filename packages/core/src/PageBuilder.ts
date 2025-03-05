export class PageBuilderCore {
    private components: Record<string, any>;
  
    constructor(config: { components: Record<string, any> }) {
      this.components = config.components;
      console.log("PageBuilderCore initialized with:", this.components);
    }
  
    getComponents() {
      return this.components;
    }
  }