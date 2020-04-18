import React from "react";

import classes from './ArtAddControls.module.css'
import ArtAddControl from "./ArtAddControl/ArtAddControl";

const addings = [
    { label: 'Naam', type: 'name'},
    { label: 'Eigenaar', type: 'owner'},
    { label: 'Kleur', type: 'color'},
    { label: 'Soort', type: 'sort'},
];

const artAddControls = (props) => (
    <div className={classes.ArtAdd}>
        {addings.map(adding => (
            <ArtAddControl key={adding.label} label={adding.label} />
        ))}

    </div>

);

export default artAddControls;