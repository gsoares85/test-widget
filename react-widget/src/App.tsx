import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

//@ts-ignore
const Container = styled.div`
  text-align: center;
  padding: 2em;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const App = () => {
  const [value, setValue] = useState(0);

  const handleValueChange = () => {
    setValue(value + 1);
  }

  useEffect(() => {
    const localStorageValue = Number(localStorage.getItem('saved'));
    if (localStorageValue != value) {
      localStorage.setItem('saved', value.toString());
    }
  }, [value]);

  return (
    <Container>
      <h1>Rootstock Widget</h1>
      <p>Value saved on local storage: {value}</p>
      <button onClick={handleValueChange}>Change Value</button>
    </Container>
  );
}
