// src/App.tsx
import React, { useEffect, useState } from "react";
var App = () => {
  const [value, setValue] = useState(0);
  const handleValueChange = () => {
    setValue(value + 1);
  };
  useEffect(() => {
    const localStorageValue = Number(localStorage.getItem("saved"));
    if (localStorageValue != value) {
      localStorage.setItem("saved", value.toString());
    }
  }, [value]);
  return /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("h1", null, "Rootstock Widget"), /* @__PURE__ */ React.createElement("p", null, "Value saved on local storage: ", value), /* @__PURE__ */ React.createElement("button", { onClick: handleValueChange }, "Change Value"));
};
export {
  App as RskWidget
};
//# sourceMappingURL=bundle.js.map
