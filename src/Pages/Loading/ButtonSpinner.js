import React from 'react';

const ButtonSpinner = () => {
    return (
        <div className="spinner-border spinner-border-sm mt-2" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default ButtonSpinner;