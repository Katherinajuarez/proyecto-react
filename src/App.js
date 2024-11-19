import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Form from "./components/Form";
import Spinner from "./components/Spinner";

const App = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProductos([
        { id: 1, nombre: "Auriculares Inalámbricos", precio: 120, categoria: "Electrónica" },
        { id: 2, nombre: "Silla de Escritorio", precio: 300, categoria: "Muebles" },
        { id: 3, nombre: "Cafetera Espresso", precio: 250, categoria: "Electrodomésticos" },
        { id: 4, nombre: "Juego de Mesa - Monopoly", precio: 50, categoria: "Juguetes" },
        { id: 5, nombre: "Libro de Programación en JavaScript", precio: 35, categoria: "Libros" }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const agregarProducto = (nuevoProducto) => {
    setProductos((prevProductos) => {
      const maxId = prevProductos.length > 0 
        ? Math.max(...prevProductos.map((producto) => producto.id)) 
        : 0;
      const productoConId = { ...nuevoProducto, id: maxId + 1 };
      return [...prevProductos, productoConId];
    });
  };
  

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Lista de productos</h1>
      {loading ? <Spinner /> : <Table productos={productos} />}
      <Form agregarProducto={agregarProducto} />
    </div>
  );
};

export default App;



