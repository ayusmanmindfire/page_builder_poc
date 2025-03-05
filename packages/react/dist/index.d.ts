import React from 'react';

interface PageBuilderConfig {
    components: Record<string, any>;
}
interface PageBuilderReactProps {
    config?: PageBuilderConfig;
}
declare const PageBuilderReact: React.FC<PageBuilderReactProps>;

export { PageBuilderReact };
