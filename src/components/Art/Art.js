import React from "react";

import classes from './Art.module.css';
import ArtInfo from './ArtInfo/ArtInfo';

const art = (props) => {
    // const transformedInfo = Object.keys(props.info)
    //     .map(infoKey => {
    //         return [...Array(props.info[infoKey])].map((_, i) => {
    //             return <ArtInfo key={infoKey + i} type={infoKey} />
    //         })
    //     });
    return (
        <div className={classes.Art}>
            <ArtInfo type="art-name" />
            <ArtInfo type="art-owner" />
            <ArtInfo type="art-color"/>
            <ArtInfo type="art-sort" />
        </div>
    );
};

export default art;