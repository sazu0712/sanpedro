// ShirtPreview.jsx
import React from "react";

function ShirtPreview({ color, stamp, shirtBaseImages }) {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: "400px", margin: "auto" }}>
      <img
        src={shirtBaseImages[color]}
        alt={`Camiseta ${color}`}
        style={{ width: "100%", display: "block" }}
      />
      {stamp && (
        <img
          src={stamp.src}
          alt={stamp.name}
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            ...stamp.style,
          }}
        />
      )}
    </div>
  );
}

export default ShirtPreview;
