import React from 'react';
import './button-form.style.scss';
const ButtonForm = ({ children, ...othersProps }) => (
    <button className="button-form" {...othersProps}>
      {children}
    </button>
);

export default ButtonForm;
