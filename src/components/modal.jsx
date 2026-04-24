function Modal({ isOpen, title, children, onClose }) {
  if (!isOpen) return null;

  return (
    // Overlay
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      {/* Modal box */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "480px",
          padding: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <h2 style={{ margin: 0, color: "#374151" }}>{title}</h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: 20,
              cursor: "pointer",
              color: "black",
            }}
          >
            ✕
          </button>
        </div>

        {/* Ichiga ixtiyoriy content */}
        {children}
      </div>
    </div>
  );
}

export default Modal;
