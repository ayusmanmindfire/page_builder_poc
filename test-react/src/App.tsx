import { PageBuilderReact } from "page-builder-react";
import CustomButton from "./components/CustomButton";

const App = () => {
  const config = {
    theme: "dark",
    grid: true,
    components: ["text", "image", "button"], // Example config
  };

  return (
    <div>
      <CustomButton label={"HELLO"} disabled/>
      <PageBuilderReact config={config} />
    </div>
  );
};

export default App;
