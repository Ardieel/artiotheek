import React from "react";

import classes from './ArtAddControl.module.css';

const artAddControl = (props) => (
    <div className={classes.ArtAddControl}>
        <div className={classes.Label}>{props.artLabel}</div>

    </div>

);

export default artAddControl;