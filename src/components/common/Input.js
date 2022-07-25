import React from "react";
import classes from "./Input.module.css";

// React.forwardRef will make this custom component be able to receive refs as any normal HTML component
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
