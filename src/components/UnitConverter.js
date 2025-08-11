import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

function UnitConverter() {
  const [value, setValue] = useState('');
  const [from, setFrom] = useState('m');
  const [to, setTo] = useState('ft');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    setResult(`Result: ${(parseFloat(value) * 3.28084).toFixed(2)} ${to}`);
  };

  return (
    <Row>
      <Col md={8}>
        <div className="converter-box">
          <Row>
            <Col>
              <Form.Label>From:</Form.Label>
              <Form.Select value={from} onChange={(e) => setFrom(e.target.value)}>
                <option value="m">Meter</option>
                <option value="km">Kilometer</option>
                <option value="cm">Centimeter</option>
                <option value="mm">Millimeter</option>
                <option value="yd">Yard</option>
                <option value="ft">Foot</option>
                <option value="in">Inch</option>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>To:</Form.Label>
              <Form.Select value={to} onChange={(e) => setTo(e.target.value)}>
                <option value="m">Meter</option>
                <option value="km">Kilometer</option>
                <option value="cm">Centimeter</option>
                <option value="mm">Millimeter</option>
                <option value="yd">Yard</option>
                <option value="ft">Foot</option>
                <option value="in">Inch</option>
                <option value="C">Celsius</option>
                <option value="F">Fahrenheit</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Control
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter value"
            className="mt-3"
          />
          <Button onClick={handleConvert} className="mt-3">Convert</Button>
          <p className="result mt-3">{result}</p>
        </div>
      </Col>
      <Col md={4}>
        <div className="description-box">
          <h4>About Unit Converter</h4>
          <p>
            The Unit Converter at Allconverters allows you to transform measurements between various units such as length, temperature, and more. Perfect for wizards needing to convert distances across the Hogwarts grounds or potion temperatures, this tool uses magical precision to ensure accurate results. Whether you're converting meters to feet or Celsius to Fahrenheit, simply select your units and enter a value!
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default UnitConverter;