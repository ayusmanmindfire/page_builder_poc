import React, { useEffect, useRef } from "react";

interface PageBuilderConfig {
  theme?: string;
  grid?: boolean;
  components: Record<string, any>;
}

interface PageBuilderReactProps {
  config: PageBuilderConfig;
  reactComponents: Record<string, React.FC<any>>;
}

export const PageBuilderReact: React.FC<PageBuilderReactProps> = ({ config, reactComponents }) => {
  const builderRef = useRef<HTMLElement>(null);
  useEffect(() => {
    // Dynamically import the web component
    import("web-component").catch(error => {
      console.error("Failed to load web component:", error);
    });
  }, []);

  useEffect(() => {
    if (builderRef.current) {
      console.log("Config in React wrapper:", config);
      console.log("React Components in React wrapper:", reactComponents);

      builderRef.current.setAttribute("config-data", JSON.stringify(config)); // Pass serializable config
      (builderRef.current as any).reactComponents = reactComponents; // Pass React components separately
    }
  }, [config, reactComponents]);

  return <page-builder ref={builderRef} />;
};