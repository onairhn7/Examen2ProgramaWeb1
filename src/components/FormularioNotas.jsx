import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const FormularioNotas = () => {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [alerta, setAlerta] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validación de notas
    if (nota1 === '' || nota2 === '' || nota3 === '') {
      setAlerta('Debe ingresar todas las notas.');
      return;
    }

    const totalNotas = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
    const notaFinal = (totalNotas / (30 + 30 + 40)) * 100;

    // Determinar el mensaje según la nota final
    if (notaFinal >= 90 && notaFinal <= 100) {
      setMensaje('Sobresaliente');
    } else if (notaFinal >= 80 && notaFinal <= 89) {
      setMensaje('Muy Bueno');
    } else if (notaFinal >= 60 && notaFinal <= 79) {
      setMensaje('Bueno');
    } else {
      setMensaje('Reprobado');
    }

    setAlerta('');
  };

  return (
    <div>
      <h2>Formulario de Notas</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNota1">
          <Form.Label>Primer parcial (30%):</Form.Label>
          <Form.Control type="number" value={nota1} onChange={(e) => setNota1(e.target.value)} max="30" required />
        </Form.Group>
        <Form.Group controlId="formNota2">
          <Form.Label>Segundo parcial (30%):</Form.Label>
          <Form.Control type="number" value={nota2} onChange={(e) => setNota2(e.target.value)} max="30" required />
        </Form.Group>
        <Form.Group controlId="formNota3">
          <Form.Label>Tercer parcial (40%):</Form.Label>
          <Form.Control type="number" value={nota3} onChange={(e) => setNota3(e.target.value)} max="40" required />
        </Form.Group>
        {alerta && <Alert variant="danger">{alerta}</Alert>}
        <Button variant="primary" type="submit">Calcular</Button>
      </Form>
      {mensaje && <Alert variant="info" className="mt-3">El resultado es: {mensaje}</Alert>}
    </div>
  );
};

export default FormularioNotas;

