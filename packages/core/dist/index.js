export class PageBuilderCore {
    constructor(config, reactComponents = {}) {
        this.components = config.components;
        this.reactComponents = reactComponents;
        console.log("✅ PageBuilderCore initialized with config:", this.components);
        console.log("✅ PageBuilderCore received React components:", this.reactComponents);
        this.render(); // ✅ Invoke render method in constructor
    }
    getComponents() {
        return this.components;
    }
    // ✅ Render method using Vanilla JavaScript
    render() {
        const container = document.getElementById("canvas");
        console.log(container);
        if (!container) {
            console.error("❌ No #core-container found. Cannot render.");
            return;
        }
        // ✅ Clear previous content before rendering
        container.innerHTML = "<h2>Page Builder Core</h2>";
        // ✅ Loop through components and create HTML elements dynamically
        Object.entries(this.components || {}).forEach(([key, comp]) => {
            const element = document.createElement("div");
            element.classList.add("page-builder-component");
            element.innerText = comp.label || `Unknown Component (${key})`;
            container.appendChild(element);
        });
    }
}
