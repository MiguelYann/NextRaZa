import React from 'react';

const InputForm = ({ id, handleInput, textLabel, ...others }) => (
  <>
    <label htmlFor={id}>{textLabel}</label>
    <input id={id} {...others} onChange={handleInput} />
  </>
);

export default InputForm;
