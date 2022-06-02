import React, { useState, useCallback } from "react";
import ThemeContextProvider, { ThemeContext } from "./context/ThemeContext";
import Calculator from "./Calculator";

function App() {
  const operator = ["/", "*", "+", "-", ".", "="];
  const [digitsAndOperators, setItem] = useState("");
  const getValue = useCallback(() => {
    return digitsAndOperators;
  }, [digitsAndOperators]);
  const updateValue = (item) => {
    var a = digitsAndOperators;
    console.log(a.slice(-1), item);
    if (
      operator.includes(digitsAndOperators.slice(-1)) &&
      operator.includes(item)
    ) {
      setItem(
        digitsAndOperators.substring(0, digitsAndOperators.length - 1) + item
      );
    } else if (digitsAndOperators.includes(".") && item == ".") {
    } else setItem(a + item);
    // setItem(a+item)
    if (a.slice(-1) == "=") {
      reset();
    }
  };

  const reset = () => {
    setItem("");
  };

  // const total = () => {
  //   setItem(digitsAndOperators)
  // }
  // const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="App">
        <Calculator
          updateValue={updateValue}
          getValue={getValue}
          reset={reset}
        />
    </div>
  );
}

export default App;
