import { PageBuilderReact } from "page-builder-react";

const App = () => {
  const config = {
    theme: "dark",
    grid: true,
    components: ["text", "image", "button"], // Example config
  };

  return (
    <div>
      <PageBuilderReact config={config} />
    </div>
  );
};

export default App;
