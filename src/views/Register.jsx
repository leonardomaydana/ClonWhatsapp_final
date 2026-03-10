import { useState } from "react";

function Registro() {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres");
      return;
    }

    if (!email.includes("@")) {
      alert("Email inválido");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    alert("Usuario registrado correctamente");
  };

  return(
  <div className="auth-container">
    <div className="auth-card">

      <h2>Crear cuenta</h2>

      <input type="text" placeholder="Nombre" />
      <input type="email" placeholder="Correo electronico" />
      <input type="password" placeholder="Contraseña" />

      <button>Registrarse</button>

      <p ClassName="auth-footer">¿Ya tienes cuenta?<link to="/login">Iniciar sesion</link>
      </p>
    </div>
  </div>
  );
}

export default Registro;