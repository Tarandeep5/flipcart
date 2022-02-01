import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({});

function GroupButton() {
  const classes = useStyle();
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <div>
      <ButtonGroup className={classes.component} variant="outlined">
        <Button
          onClick={() => handleDecrement()}
          disabled={counter === 1}
          className={classes.button}
        >
          -
        </Button>
        <Button>{counter}</Button>
        <Button onClick={() => handleIncrement()} className={classes.button}>
          +
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default GroupButton;
