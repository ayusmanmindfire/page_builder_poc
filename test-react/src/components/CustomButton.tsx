
const CustomButton = ({ label="Default", style, disabled }:any) => {
  function onClick(){
    console.log("hyyyyy")
    alert("HY")
  }
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        margin:"5px",
        fontSize: "16px",
        backgroundColor: disabled ? "#ccc" : "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default CustomButton;
