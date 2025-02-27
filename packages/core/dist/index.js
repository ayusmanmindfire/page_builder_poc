"use strict";
class PageBuilderCore {
    constructor(config) {
        this.components = config.components;
        console.log("PageBuilderCore initialized with:", this.components);
    }
    getComponents() {
        return this.components;
    }
}
const page = new PageBuilderCore({ components: {} });
