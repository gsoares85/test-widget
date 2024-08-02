import './app.css';
import React, {useEffect, useState} from 'react';

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
    <div className="container">
      <h1>Rootstock Widget</h1>
      <p>Value saved on local storage: {value}</p>
      <button onClick={handleValueChange}>Change Value</button>
    </div>
  );
}
