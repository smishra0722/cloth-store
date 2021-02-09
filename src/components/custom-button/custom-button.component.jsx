import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, ...otherDetails}) => (
    <button {...otherDetails}>{children}</button>
);

export default CustomButton;