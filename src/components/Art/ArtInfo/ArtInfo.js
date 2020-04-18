import React, {Component} from "react";
import PropTypes from 'prop-types';

import classes from './ArtInfo.module.css'

class ArtInfo extends Component {
    render() {

        let info = null;

        switch (this.props.type) {
            case('art-name'):
                info = <div className={classes.ArtName}></div>;
                break;
            case ('art-owner'):
                info = <div className={classes.ArtOwner}></div>;
                break;
            case ('art-color'):
                info = <div className={classes.ArtColor}></div>;
                break;
            case ('art-sort'):
                info = <div className={classes.ArtSort}></div>;
                break;
            default:
                info = null;
        }
        return info;
    }
}

ArtInfo.propTypes = {
    type: PropTypes.string.isRequired
};

export default ArtInfo;