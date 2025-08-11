import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function TextConverter() {
  const [value, setValue] = useState('');
  const [textType, setTextType] = useState('upper');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    let converted;
    switch (textType) {
      case 'upper': converted = value.toUpperCase(); break;
      case 'lower': converted = value.toLowerCase(); break;
      case 'reverse': converted = value.split('').reverse().join(''); break;
      case 'base64-encode': converted = btoa(value); break;
      case 'base64-decode': converted = atob(value); break;
      default: converted = value;
    }
    setResult(`Result: ${converted}`);
  };

  return (
    <div className="converter-box">
      <Form.Select value={textType} onChange={(e) => setTextType(e.target.value)} className="mb-3">
        <option value="upper">To Uppercase</option>
        <option value="lower">To Lowercase</option>
        <option value="reverse">Reverse Text</option>
        <option value="base64-encode">Base64 Encode</option>
        <option value="base64-decode">Base64 Decode</option>
      </Form.Select>
      <Form.Control
        as="textarea"
        rows={3}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
      />
      <Button onClick={handleConvert} className="mt-3">Convert</Button>
      <p className="result mt-3">{result}</p>
    </div>
  );
}

export default TextConverter;