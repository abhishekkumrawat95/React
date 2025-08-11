import React, { useState } from 'react';
import { Container, Nav, Tab, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [unitValue, setUnitValue] = useState('');
  const [unitFrom, setUnitFrom] = useState('m');
  const [unitTo, setUnitTo] = useState('ft');
  const [unitResult, setUnitResult] = useState('');
  const [baseValue, setBaseValue] = useState('');
  const [baseFrom, setBaseFrom] = useState('2');
  const [baseTo, setBaseTo] = useState('10');
  const [baseResult, setBaseResult] = useState('');
  const [textValue, setTextValue] = useState('');
  const [textType, setTextType] = useState('upper');
  const [textResult, setTextResult] = useState('');

  const handleUnitConvert = () => {
    setUnitResult(`Result: ${(parseFloat(unitValue) * 3.28084).toFixed(2)} ${unitTo}`);
  };

  const handleBaseConvert = () => {
    const decimal = parseInt(baseValue, parseInt(baseFrom));
    setBaseResult(`Result: ${decimal.toString(parseInt(baseTo)).toUpperCase()}`);
  };

  const handleTextConvert = () => {
    switch (textType) {
      case 'upper':
        setTextResult(`Result: ${textValue.toUpperCase()}`);
        break;
      case 'lower':
        setTextResult(`Result: ${textValue.toLowerCase()}`);
        break;
      case 'reverse':
        setTextResult(`Result: ${textValue.split('').reverse().join('')}`);
        break;
      case 'base64-encode':
        setTextResult(`Result: ${btoa(textValue)}`);
        break;
      case 'base64-decode':
        setTextResult(`Result: ${atob(textValue)}`);
        break;
      default:
        setTextResult('Result: No change');
    }
  };

  return (
    <div className="hogwarts-theme">
      <header className="header">
        <h1>Wizarding Converter</h1>
        <Nav variant="pills" className="converter-tabs">
          <Nav.Item>
            <Nav.Link eventKey="length">Length</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="temperature">Temperature</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="area">Area</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="volume">Volume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="weight">Weight</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="time">Time</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <Container className="mt-4">
        <Tab.Container defaultActiveKey="length">
          <Row>
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="length">
                  <div className="converter-box">
                    <Row>
                      <Col>
                        <Form.Control
                          type="number"
                          value={unitValue}
                          onChange={(e) => setUnitValue(e.target.value)}
                          placeholder="Enter value"
                          className="mb-2"
                        />
                        <Form.Select
                          value={unitFrom}
                          onChange={(e) => setUnitFrom(e.target.value)}
                          className="mb-2"
                        >
                          <option value="m">Meter</option>
                          <option value="km">Kilometer</option>
                          <option value="cm">Centimeter</option>
                          <option value="mm">Millimeter</option>
                          <option value="nm">Nanometer</option>
                          <option value="yd">Yard</option>
                          <option value="ft">Foot</option>
                          <option value="in">Inch</option>
                          <option value="ly">Light Year</option>
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Select
                          value={unitTo}
                          onChange={(e) => setUnitTo(e.target.value)}
                          className="mb-2"
                        >
                          <option value="m">Meter</option>
                          <option value="km">Kilometer</option>
                          <option value="cm">Centimeter</option>
                          <option value="mm">Millimeter</option>
                          <option value="nm">Nanometer</option>
                          <option value="yd">Yard</option>
                          <option value="ft">Foot</option>
                          <option value="in">Inch</option>
                          <option value="ly">Light Year</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Button onClick={handleUnitConvert} variant="primary" className="mt-2">
                      Convert
                    </Button>
                    <p className="result-text mt-3">{unitResult}</p>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="temperature">
                  <div className="converter-box">
                    <Row>
                      <Col>
                        <Form.Control
                          type="number"
                          value={unitValue}
                          onChange={(e) => setUnitValue(e.target.value)}
                          placeholder="Enter value"
                          className="mb-2"
                        />
                        <Form.Select
                          value={unitFrom}
                          onChange={(e) => setUnitFrom(e.target.value)}
                          className="mb-2"
                        >
                          <option value="C">Celsius</option>
                          <option value="F">Fahrenheit</option>
                          <option value="K">Kelvin</option>
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Select
                          value={unitTo}
                          onChange={(e) => setUnitTo(e.target.value)}
                          className="mb-2"
                        >
                          <option value="C">Celsius</option>
                          <option value="F">Fahrenheit</option>
                          <option value="K">Kelvin</option>
                        </Form.Select>
                      </Col>
                    </Row>
                    <Button onClick={handleUnitConvert} variant="primary" className="mt-2">
                      Convert
                    </Button>
                    <p className="result-text mt-3">{unitResult}</p>
                  </div>
                </Tab.Pane>
                {/* Add similar panes for Area, Volume, Weight, Time with appropriate units */}
              </Tab.Content>
            </Col>
            <Col md={3}>
              <div class="sidebar">
                <h4>All Converters</h4>
                <ul>
                  <li>Common Converters</li>
                  <li>Engineering Converters</li>
                  <li>Heat Converters</li>
                  <li>Fluids Converters</li>
                  <li>Light Converters</li>
                  <li>Electricity Converters</li>
                  <li>Magnetism Converters</li>
                  <li>Radiology Converters</li>
                  <li>Common Unit Systems</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default App;