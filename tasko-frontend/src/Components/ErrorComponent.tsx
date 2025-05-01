import React from 'react';
import { errorImg } from '../Constants/data';

const ErrorComponent = () => {
    return (
        <div>
            <img src={errorImg} alt="" />
        </div>
    );
};

export default ErrorComponent;