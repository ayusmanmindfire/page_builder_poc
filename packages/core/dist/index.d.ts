export declare class PageBuilderCore {
    private components;
    private reactComponents;
    constructor(config: {
        components: Record<string, any>;
    }, reactComponents?: Record<string, any>);
    getComponents(): Record<string, any>;
    private render;
}
