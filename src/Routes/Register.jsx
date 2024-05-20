import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [user, setUser] = useState({ correo: "", name: "", password: "" });
  const [error, setError] = useState(false);
  const { correo, name, password } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(correo) && password.length >= 6 && name.length > 3) {
      setError(false);
      setUser({ correo: "", password: "", name: "" });
      notify();
    } else {
      setError(true);
    }
    setTimeout(() => setMostrar(false), 800);
  };

  const notify = () =>
    toast.success("Registro exitoso!!!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const validateEmail = (correo) => {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+.com$/;
    return emailRegex.test(correo);
  };

  return (
    <div className="flex-container centered">
      <form onSubmit={handleSubmit} id="form">
        <div className="card ">
          <p className="title-form">Crear Cuenta</p>
          <div className="inputContainer">
            <input value={correo} placeholder="Ingrese su email" name="correo" type="text"
              onChange={(e) => setUser({ ...user, correo: e.target.value })}/>
          </div>
          <div className="inputContainer">
            <input value={name} placeholder="Ingrese su nombre" name="name" type="text"
              onChange={(e) => setUser({ ...user, name: e.target.value })}/>
          </div>
          <div className="inputContainer">
            <input value={password} placeholder="Ingrese su contraseña" name="password" type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}/>
          </div>
          <div className="inputContainer terminos__condiciones">
            <label htmlFor="aceptar">
              Acepto los terminos y condiciones de ArrancAR
            </label>
            <input className="checkbox" id="checkbox" value={false} name="aceptar" type="checkbox"/>
          </div>
          <button className="btn-login" onClick={handleSubmit}>
            Enviar Datos
          </button>
          <ToastContainer />
        </div>
        {error && (
          <h3 className={error ? "visible error" : "error"}>
            Por favor, verifique los campos ingresados
          </h3>
        )}
      </form>
    </div>
  );
};
export default Register;
