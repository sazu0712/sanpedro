import React from "react";

export default function OrderSummary({ order, removeFromOrder, generateWhatsAppLink }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Resumen del pedido</h2>
      <ul className="list-disc ml-6">
        {order.map((item, index) => (
          <li key={index}>
            Camiseta {index + 1}: Talla {item.size}, Color {item.color}, Diseño "{item.stamp.name}"
            <button
              onClick={() => removeFromOrder(index)}
              className="ml-2 px-2 py-1 text-sm text-red-600 border border-red-600 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      {order.length > 0 && (
        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 bg-green-500 text-white rounded shadow"
        >
          Enviar pedido por WhatsApp
        </a>
      )}
    </div>
  );
}
