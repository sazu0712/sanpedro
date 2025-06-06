import React, { useState } from "react";
import ControlsPanel from "./components/ControlsPanel";
import ShirtPreview from "./components/ShirtPreview";
import OrderSummary from "./components/OrderSummary";

const shirtBaseImages = {
  blanco: "/maquetas/camiseta_blanca.png",
  negro: "/maquetas/camiseta_negra.png",
  azul: "/maquetas/camiseta_azul.png",
  verde: "/maquetas/camiseta_verde.png",
  gris: "/maquetas/camiseta_gris.png",
  marfil: "/maquetas/camiseta_marfil.png",
  cafe: "/maquetas/camiseta_cafe.png",
  palorosa: "/maquetas/camiseta_palorosa.png",
};

const stampOptions = [
  {
    name: "Tambora",
    src: "/mockups/Tambora.png",
    style: {
      top: "50%",
      left: "51%",
      width: "150px",
      height: "200px",
    },
  },
  {
    name: "Tocado",
    src: "/mockups/Tocado.png",
    style: {
      top: "40%",
      left: "55%",
      width: "400px",
      height: "400px",
    },
  },
  {
    name: "Ole y Entonces",
    src: "/mockups/Ole_y_entonces.png",
    style: {
      top: "36%",
      left: "50%",
      width: "130px",
      height: "65px",
    },
  },
  {
    name: "Sirvame uno",
    src: "/mockups/Sirva.png",
    style: {
      top: "43%",
      left: "50%",
      width: "140px",
      height: "140px",
    },
  },
  {
    name: "Neiva York",
    src: "/mockups/Neivayork.png",
    style: {
      top: "35%",
      left: "52%",
      width: "150px",
      height: "80px",
    },
  },
  {
    name: "Todo es gloria",
    src: "/mockups/mi_tierra.png",
    style: {
      top: "20%",
      left: "51%",
      width: "190px",
      height: "100px",
    },
  },
  {
    name: "Corona de flor",
    src: "/mockups/Corona.png",
    style: {
      top: "19%",
      left: "50%",
      width: "190px",
      height: "95px",
    },
  },
];

const sizes = ["S", "M", "L", "XL"];

function App() {
  const [order, setOrder] = useState([]);
  const [color, setColor] = useState("blanco");
  const [stamp, setStamp] = useState(stampOptions[0]);
  const [size, setSize] = useState("M");

  const addToOrder = () => {
    setOrder([...order, { color, stamp, size }]);
  };

  const removeFromOrder = (indexToRemove) => {
    setOrder(order.filter((_, index) => index !== indexToRemove));
  };

  const generateWhatsAppLink = () => {
    const message = order
      .map(
        (item, index) =>
          `Camiseta ${index + 1}: Talla ${item.size}, Color ${item.color}, Diseño "${item.stamp.name}"`
      )
      .join("%0A");

    return `https://wa.me/573123672978?text=${encodeURIComponent(
      `Hola, quiero hacer el siguiente pedido:%0A${message}`
    )}`;
  };

  return (
    <div className="p-4 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ControlsPanel
          color={color}
          setColor={setColor}
          shirtBaseImages={shirtBaseImages}
          size={size}
          setSize={setSize}
          sizes={sizes}
          stamp={stamp}
          setStamp={setStamp}
          stampOptions={stampOptions}
          addToOrder={addToOrder}
        />
        <ShirtPreview
          color={color}
          stamp={stamp}
          shirtBaseImages={shirtBaseImages}
        />
      </div>
      <OrderSummary
        order={order}
        removeFromOrder={removeFromOrder}
        generateWhatsAppLink={generateWhatsAppLink}
      />
    </div>
  );
}

export default App;
