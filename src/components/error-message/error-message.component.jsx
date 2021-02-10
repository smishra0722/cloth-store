import React from 'react';
import './error-message.styles.scss';

export const ErrorMessage = ({error}) => {
    const err= error.indexOf('.');
    return(
    <div className='error'>{error.slice(0, err)}</div>
)};

