import { PageBuilderReact } from "page-builder-react";
import CustomButton from "./components/CustomButton";
import CustomTable from "./components/CustomTable";
import Counter from "./components/Counter";
import Rating from "./components/CustomRating";
import CustomToggle from "./components/CustomToggle";

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
    customTable: CustomTable,
    customCounter:Counter,
    customRating: Rating,
    customToggle: CustomToggle
  };

  return (
    <div>
      <CustomButton label={"HELLO FROM USER"}  />
      <PageBuilderReact config={serializableConfig} reactComponents={reactComponents} />
    </div>
  );
};

export default App;