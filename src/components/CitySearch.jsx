import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

export default function CitySearch({ onSearch, defaultCity = '' }) {
  const [value, setValue] = useState(defaultCity);

  function submit(e) {
    e.preventDefault();
    onSearch?.(value.trim());
  }

  return (
    <Form onSubmit={submit}>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Inserisci una città (es. Milano)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" variant="primary">Cerca</Button>
      </InputGroup>
    </Form>
  );
}
