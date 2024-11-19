import React from "react";

const Table = ({ productos }) => {
  return (
    <table style={{ margin: "auto", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>{producto.categoria}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

