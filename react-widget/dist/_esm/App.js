import React, { useEffect, useState } from 'react';
import './App.css';
export const App = () => {
    const [value, setValue] = useState(0);
    const handleValueChange = () => {
        setValue(value + 1);
    };
    useEffect(() => {
        const localStorageValue = Number(localStorage.getItem('saved'));
        if (localStorageValue != value) {
            localStorage.setItem('saved', value.toString());
        }
    }, [value]);
    return (React.createElement("div", { className: "container" },
        React.createElement("h1", null, "Rootstock Widget"),
        React.createElement("p", null,
            "Value saved on local storage: ",
            value),
        React.createElement("button", { onClick: handleValueChange }, "Change Value")));
};
//# sourceMappingURL=App.js.map