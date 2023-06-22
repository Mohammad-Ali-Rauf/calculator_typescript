import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");

  // Function to handle button clicks
  const handleButtonClick = (value: string | number) => {
    setResult(result + value);
  };

  // Function to calculate the result
  const handleCalculate = () => {
    try {
      const calculatedResult = eval(result);
      if (isNaN(calculatedResult) || !isFinite(calculatedResult)) {
        setResult("Error: Invalid input");
      } else {
        setResult(calculatedResult);
      }
    } catch (error) {
      setResult("Error: Invalid input");
    }
  };

  // Function to clear the input
  const handleClear = () => {
    setResult("");
  };

  // Function to remove the last character from the input
  const handleBackspace = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="card text-center">
      <div className="card-header">
        <h3 className="card-title fw-bold">Calculator</h3>
      </div>
      <div className="card-body">
        {/* Display the result */}
        <input
          type="text"
          className="form-control mb-3"
          value={result}
          readOnly
        />

        {/* Buttons for digits, operators, and control functions */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-2">
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-2">
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("*")}
          >
            *
          </button>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-2">
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button className="btn btn-primary me-md-2" onClick={handleCalculate}>
            =
          </button>
          <button
            className="btn btn-primary me-md-2"
            onClick={() => handleButtonClick("/")}
          >
            /
          </button>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-2">
          <button className="btn btn-danger me-md-2" onClick={handleBackspace}>
            Backspace
          </button>
          <button className="btn btn-danger" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
