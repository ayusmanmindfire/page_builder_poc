
const CustomButton = ({ label, onClick, style, disabled }:any) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
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
