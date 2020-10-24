import React from 'react';
import './input-form.style.scss';

const InputForm = ({ id, handleInput, textLabel, ...otherProps }) => (
  <div className="group-input-form">
    <label
      className={ `${otherProps.value.length  ? 'label-form' : ''} label-input-form `}
      htmlFor={id}
    >
      {textLabel}
    </label>
    <input
      className="input-form"
      id={id}
      {...otherProps}
      onChange={handleInput}
    />
  </div>
);

export default InputForm;
