import React from 'react';
import './styles.css';

const Spinner = () => (
    <div className="container">
        <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
);

export default Spinner;