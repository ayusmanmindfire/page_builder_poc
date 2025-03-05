import React, { useEffect, useRef } from "react";

interface PageBuilderConfig {
  components: Record<string, any>;
}

interface PageBuilderReactProps {
  config?: PageBuilderConfig;
}

export const PageBuilderReact: React.FC<PageBuilderReactProps> = ({ config = { components: {} } }) => {
  const builderRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Dynamically import the web component
    import("web-component").catch(error => {
      console.error("Failed to load web component:", error);
    });
  }, []);

  useEffect(() => {
    if (builderRef.current) {
      // Use config-data attribute instead of config to avoid potential conflicts
      builderRef.current.setAttribute('config-data', JSON.stringify(config));
      console.log("Config in react wrapper:",config)
    }
  }, [config]);

  return <page-builder ref={builderRef} />;
};