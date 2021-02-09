import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherDetails}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherDetails} />
        {
            label?<label className='form-input-label'>{label}</label>: ''
        }
    </div>
);

export default FormInput;