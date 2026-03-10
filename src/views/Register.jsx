import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext"
import { useNavigate } from "react-router-dom"

const Register = () => {

  const [nombre, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("")
  const [error,setError] = useState(null)

  const { register ,handleUser} = useContext(ChatContext)

  const navigate = useNavigate()

   const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

    const handleChangeConfPassword = (e) => {
    setConfirmpassword(e.target.value)
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    setError(null)
    const response = register({name, email, password, confirmpassword })

    if (!response) {
      setError(true)
      return
    }

    handleUser({name, email, password})
    navigate("/")
  }
  const handlePage = (e) => {
    navigate("/login")
  }

  return (
    <section className="login">
      <h2 className="title-login">Crear una cuenta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          minLength={3}
          onChange={handleChangeName}
          required
        />
        {name.length < 3 && <p className="error-form">Minimo 3 caracteres</p>}
        <input
          type="email"
          placeholder="Correo electrónico"
          onChange={handleChangeEmail}
          required
        />
        {!email.includes('@') && <p className="error-form">Mail no valido</p>}
        <input
          type="password"
          minLength={6}
          placeholder="Contraseña"
          onChange={handleChangePassword}
          required
        />
        {password.length < 6 && <p className="error-form">Contraseña muy debil (minimo 6)</p>}
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          minLength={6}
          onChange={handleChangeConfPassword}
          required
        />
        {confirmpassword !== password && <p className="error-form">Contraseñas deben coincidir</p>}
        <button>Registrar</button>
        {
          error && <p className="error-form">Error al Registrar</p>
        }
        <button onClick={handlePage}>Volver a inicio de session</button>
      </form>
    </section>
  )
}

export { Register }