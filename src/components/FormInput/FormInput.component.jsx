import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({handleChange, label, ...props}) => {
  return (
    <div className="form-group">
      <input type="text" className="form-input" onChange={handleChange} {...props}/>
      {
          label ?
          <label
            htmlFor=""
            className={`${props.value.length ? 'shrink' : ''} form-input-label`}
          >
            {label}
         </label> :
          null
      }
    </div>
  );
};

export default FormInput;