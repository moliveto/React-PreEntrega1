import React, { useState, useEffect } from "react";

const Products = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Emitir una llamada asincrónica a un mock que devuelve productos en dos segundos
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            nombre: "Producto 1",
            precio: 100,
          },
          {
            id: 2,
            nombre: "Producto 2",
            precio: 200,
          },
        ]);
      }, 2000);
    });

    // Esperar a que la promesa se resuelva
    promise.then((productosRes) => {
      // Devolver los productos del mock
      setProductos(productosRes);
    });
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      {productos.map((producto, index) => (
        <div key={index}>
          <h2>{producto.nombre}</h2>
          <p>Precio: {producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
