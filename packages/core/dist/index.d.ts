declare class PageBuilderCore {
    private components;
    constructor(config: {
        components: Record<string, any>;
    });
    getComponents(): Record<string, any>;
}
declare const page: PageBuilderCore;
