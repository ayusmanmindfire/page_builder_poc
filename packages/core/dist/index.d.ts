export declare class PageBuilderCore {
    private components;
    private reactComponents;
    private reactRoot;
    constructor(config: {
        components: Record<string, any>;
    }, reactComponents?: Record<string, any>);
    private render;
}
