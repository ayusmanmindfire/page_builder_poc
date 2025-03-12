export declare class PageBuilderCore {
    private components;
    private customComponents;
    private container;
    private customComponentContainer;
    constructor(config: {
        components: Record<string, any>;
    }, customComponents?: Record<string, any>);
    private render;
}
