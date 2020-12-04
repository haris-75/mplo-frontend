import React from 'react';
import classes from './Logo.css';


const mplOlogo = '/media/logos/logo.png';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={mplOlogo} alt="mpolo-logo" />
    </div>
);

export default logo;