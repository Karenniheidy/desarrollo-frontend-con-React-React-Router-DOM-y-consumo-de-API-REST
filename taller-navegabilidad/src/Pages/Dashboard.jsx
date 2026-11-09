import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Bienvenido al Dashboard Principal</h1>
      <p>Panel de administración de la aplicación web.</p>
      <br />
      <h3>Menú de Navegación del Sistema:</h3>
      <ul>
        <li><Link to="/productos">Gestionar Productos</Link></li>
        <li><Link to="/contacto">Ver Información de Contacto</Link></li>
      </ul>
    </div>
  );
}

export default Dashboard;