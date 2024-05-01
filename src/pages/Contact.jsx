import { useState } from 'react';
import "../stylesheets/contact.css";

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado, \n' +
      'Nombre: ' + nombre + '\n' +
      'Email: ' + email + '\n' +
      'Mensaje: ' + mensaje + '\n');
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-2">

      <div className="mb-1">
        <label htmlFor="nombre" className="form-label">Nombre:</label>
        <input
          type="text"
          id="nombre"
          className="form-control"
          placeholder="Ejemplo: Favio FTG"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="Ejemplo: Favio@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="mensaje" className="form-label">Mensaje:</label>
        <textarea
          id="mensaje"
          className="form-control"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Enviar</button>
      
    </form>
  );
};

export default Contact;