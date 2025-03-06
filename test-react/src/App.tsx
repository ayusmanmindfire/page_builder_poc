import { PageBuilderReact } from "page-builder-react";
import CustomButton from "./components/CustomButton";

const App = () => {
  const serializableConfig = {
    theme: "dark",
    grid: true,
    components: {
      text: { type: "text", label: "Text Component" },
      image: { type: "image", label: "Image Component" },
      button: { type: "button", label: "Button Component" },
      customButton: { type: "customButton", label: "Custom Button Component" },
    },
  };

  const reactComponents = {
    customButton: CustomButton,
  };

  return (
    <div>
      <CustomButton label={"HELLO"} disabled />
      <PageBuilderReact config={serializableConfig} reactComponents={reactComponents} />
    </div>
  );
};

export default App;