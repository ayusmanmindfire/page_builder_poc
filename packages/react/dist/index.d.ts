import React from 'react';

interface PageBuilderConfig {
    theme?: string;
    grid?: boolean;
    components: Record<string, any>;
}
interface PageBuilderReactProps {
    config: PageBuilderConfig;
    reactComponents: Record<string, React.FC<any>>;
}
declare const PageBuilderReact: React.FC<PageBuilderReactProps>;

export { PageBuilderReact };
