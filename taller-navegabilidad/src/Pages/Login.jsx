import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  function llevarDash() {
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Escriba correo"></input>
      <input type="text" placeholder="Escriba password"></input>
      <button onClick={llevarDash}>Aceptar</button>
    </div>
  )
}

export default Login;