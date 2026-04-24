function Button({
  children,
  variant = "primary", // default: "primary"
  size = "md", // default: "md"
  isDisabled = false, // default: false
  onClick = () => {}, // default: bo'sh funksiya
}) {
  const styles = {
    primary: { background: "#3b82f6", color: "#fff" },
    secondary: { background: "#e5e7eb", color: "#374151" },
    danger: { background: "#ef4444", color: "#fff" },
  };

  const sizes = {
    sm: { padding: "4px 12px", fontSize: "12px" },
    md: { padding: "8px 20px", fontSize: "14px" },
    lg: { padding: "12px 28px", fontSize: "16px" },
  };

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      style={{
        ...styles[variant],
        ...sizes[size],
        border: "none",
        borderRadius: "6px",
        cursor: isDisabled ? "not-allowed" : "pointer",
        opacity: isDisabled ? 0.5 : 1,
        fontWeight: 600,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
