import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmacion, setConfirmacion] = useState("");
  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (
      nombre === "" ||
      email === "" ||
      contrasena === "" ||
      confirmacion === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
    setNombre("");
    setEmail("");
    setContrasena("");
    setConfirmacion("");
  };

  return (
    <>
      <Form onSubmit={validarDatos} className="formu">
        <Form.Group className="mb-3">          

          <div className="campos">
            <input
              placeholder="Nombre"
              type="text"
              className="Form-Control"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>
          <div className="campos">
            <input
              placeholder="tuemail@ejemplo.com"
              type="email"
              className="Form-Control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="campos">
            <input
              placeholder="Contraseña"
              type="password"
              className="Form-Control"
              onChange={(e) => setContrasena(e.target.value)}
              value={contrasena}
            />
          </div>
          <div className="campos">
            <input
              placeholder="Confirma tu Contraseña"
              type="password"
              className="Form-Control"
              onChange={(e) => setConfirmacion(e.target.value)}
              value={confirmacion}
            />
          </div>
          <div className="campos">
            <Button type="submit" variant="success" className="btn btn-primary">
              Registrarse
            </Button>
          </div>
          <div className="campos">
          {error ? <p>Completa todos los Campos</p> : null}
          </div>
        </Form.Group>
      </Form>
    </>
  );
}

export default Formulario;
