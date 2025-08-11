import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

function BaseConverter() {
  const [value, setValue] = useState('');
  const [from, setFrom] = useState('2');
  const [to, setTo] = useState('10');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    const decimal = parseInt(value, parseInt(from));
    setResult(`Result: ${decimal.toString(parseInt(to)).toUpperCase()}`);
  };

  return (
    <div className="converter-box">
      <Row>
        <Col>
          <Form.Label>From Base:</Form.Label>
          <Form.Select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="2">Binary (2)</option>
            <option value="8">Octal (8)</option>
            <option value="10">Decimal (10)</option>
            <option value="16">Hex (16)</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Label>To Base:</Form.Label>
          <Form.Select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="2">Binary (2)</option>
            <option value="8">Octal (8)</option>
            <option value="10">Decimal (10)</option>
            <option value="16">Hex (16)</option>
          </Form.Select>
        </Col>
      </Row>
      <Form.Control
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter number"
        className="mt-3"
      />
      <Button onClick={handleConvert} className="mt-3">Convert</Button>
      <p className="result mt-3">{result}</p>
    </div>
  );
}

export default BaseConverter;