import { useState } from "react";
import styles from "../../Calculator.module.css";
import Button from "../button";
import Display from "../display";

const signal = ["+", "-", "/", "*", "%"];

function Calculator() {
  const [displayValue, setDisplayValue] = useState<any>();
  const [firstOperation, setFirstOperation] = useState<any>();
  const [secondOperation, setSecondOperation] = useState<any>();
  const [operator, setOperator] = useState("");

  const handleClick = (value: any) => {
    const newValue = `${displayValue ? displayValue : ""}${value}`;
    const formattedValue = normalizedValue(newValue);

    setDisplayValue(formattedValue);

    if (operator) {
      setSecondOperation(formattedValue);
    } else {
      setFirstOperation(formattedValue);
    }
  };

  const normalizedValue = (value: any) => {
    if (signal.includes(value[0])) {
      return value.slice(1);
    }
    return value;
  };

  const handleOperator = (newOperator: any) => {
    if (operator) {
      calculate();
      setSecondOperation("");
    }
    setOperator(newOperator);
    setDisplayValue(newOperator);
  };

  const clearLastValue = () => {
    setSecondOperation("");
    setOperator("");
    setDisplayValue("");
  };

  const clear = () => {
    setFirstOperation("");
    clearLastValue();
  };

  const calculate = () => {
    let one = Number(firstOperation.toString().replace(",", "."));
    let two = Number(secondOperation.toString().replace(",", "."));

    let result = 0;
    switch (operator) {
      case "+":
        result = one + two;
        setResult(result);
        break;
      case "-":
        result = one - two;
        setResult(result);
        break;
      case "*":
        result = one * two;
        setResult(result);
        break;
      case "/":
        result = one / two;
        setResult(result);
        break;
    }
  };

  const setResult = (result: number) => {
    setDisplayValue(result.toString().replace(".", ","));
    setFirstOperation(result);
    setSecondOperation("");
    setOperator("");
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.display}>
        <Display>{displayValue}</Display>
        <Display miniDisplay={true}>
          {firstOperation?.toString().replace(".", ",")} {operator}{" "}
          {operator ? secondOperation : null}
        </Display>
      </div>
      <div className={styles.digits}>
        <div className={styles.row}>
          <Button onClick={clear} type="string">
            Limpar Tudo
          </Button>
          {/* <Button onClick={clearLastValue} type="string">
            Limpar Último
          </Button>
          <Button onClick={handleClick} type="string">
            {`<-`}
          </Button>
          <Button onClick={handleOperator} type="string">
            %
          </Button> */}
        </div>
        <div className={styles.row}>
          <Button onClick={handleClick} type="number">
            7
          </Button>
          <Button onClick={handleClick} type="number">
            8
          </Button>
          <Button onClick={handleClick} type="number">
            9
          </Button>
          <Button onClick={handleOperator} type="string">
            *
          </Button>
        </div>
        <div className={styles.row}>
          <Button onClick={handleClick} type="number">
            4
          </Button>
          <Button onClick={handleClick} type="number">
            5
          </Button>
          <Button onClick={handleClick} type="number">
            6
          </Button>
          <Button onClick={handleOperator} type="string">
            -
          </Button>
        </div>
        <div className={styles.row}>
          <Button onClick={handleClick} type="number">
            1
          </Button>
          <Button onClick={handleClick} type="number">
            2
          </Button>
          <Button onClick={handleClick} type="number">
            3
          </Button>
          <Button onClick={handleOperator} type="string">
            +
          </Button>
        </div>
        <div className={styles.row}>
          <Button onClick={handleClick} type="number">
            0
          </Button>
          <Button onClick={handleClick} type="string">
            ,
          </Button>
          <Button onClick={calculate} type="string">
            =
          </Button>
          <Button onClick={handleOperator} type="string">
            /
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
