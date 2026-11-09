import { useState } from "react";
import { Link } from "react-router-dom";

function Productos() {
  const [nombre, setNombre] = useState();
  const [categoria, setCategoria] = useState();
  const [precio, setPrecio] = useState();
  const [cantidad, setCantidad] = useState();
  const [productos, setProductos] = useState([]);

  async function consultar() {
    let respuesta = await fetch("http://localhost:3001/productos");
    let datos = await respuesta.json();
    setProductos(datos);
  }

  async function guardar() {
    let respuesta = await fetch("http://localhost:3001/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        cantidad: cantidad
      })
    });
    let datos = await respuesta.json();
    alert(datos.mensaje);
    consultar();
  }

  return (
    <div>
      <Link to="/dashboard">← Regresar al Dashboard</Link>
      <h1>Formulario Productos</h1>
      <input type="text" placeholder="Escriba nombre" onChange={(e) => setNombre(e.target.value)}></input>
      <input type="text" placeholder="Escriba categoría" onChange={(e) => setCategoria(e.target.value)}></input>
      <input type="number" placeholder="Escriba precio" onChange={(e) => setPrecio(e.target.value)}></input>
      <input type="number" placeholder="Escriba cantidad" onChange={(e) => setCantidad(e.target.value)}></input>
      <button onClick={guardar}>Registrar Producto</button>
      <br /><br />
      <button onClick={consultar}>Consultar Productos</button>

      <h3>Lista de Productos</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.nombre}</td>
              <td>{prod.categoria}</td>
              <td>{prod.precio}</td>
              <td>{prod.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Productos;