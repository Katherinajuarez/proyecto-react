import React, { useState } from "react";

const Form = ({ agregarProducto }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    categoria: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre && formData.precio && formData.categoria) {
      agregarProducto({ ...formData, id: Date.now(), precio: Number(formData.precio) });
      setFormData({ nombre: "", precio: "", categoria: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", margin: "20px 0" }}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        value={formData.precio}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="categoria"
        placeholder="Categoría"
        value={formData.categoria}
        onChange={handleChange}
        required
      />
      <button type="submit">Añadir</button>
    </form>
  );
};

export default Form;



