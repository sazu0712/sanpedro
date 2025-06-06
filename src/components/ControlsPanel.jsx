import React from "react";

export default function ControlsPanel({
  color,
  setColor,
  shirtBaseImages,
  size,
  setSize,
  sizes,
  stamp,
  setStamp,
  stampOptions,
  addToOrder,
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold">Selecciona el color de la camiseta</h2>
      {Object.keys(shirtBaseImages).map((colorName) => (
        <label key={colorName} className="mr-4 cursor-pointer inline-block capitalize">
          <input
            type="radio"
            name="shirtColor"
            value={colorName}
            checked={color === colorName}
            onChange={() => setColor(colorName)}
            className="mr-1"
          />
          {colorName}
        </label>
      ))}

      <h2 className="mt-4 text-lg font-semibold">Selecciona la talla</h2>
      {sizes.map((s) => (
        <label key={s} className="mr-4 cursor-pointer inline-block">
          <input
            type="radio"
            name="shirtSize"
            value={s}
            checked={size === s}
            onChange={() => setSize(s)}
            className="mr-1"
          />
          {s}
        </label>
      ))}

      <h2 className="mt-4 text-lg font-semibold">Selecciona el diseño del estampado</h2>
      {stampOptions.map((option) => (
        <button
          key={option.name}
          onClick={() => setStamp(option)}
          className={`mr-2 px-2 py-1 border rounded ${
            stamp.name === option.name ? "bg-black text-white" : ""
          }`}
        >
          {option.name}
        </button>
      ))}

      <button
        onClick={addToOrder}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        Agregar al pedido
      </button>
    </div>
  );
}
