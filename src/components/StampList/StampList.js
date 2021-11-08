import React from "react";
import ArrayManager from "../../utils/arrays/ArrayManager";
import PropTypes from "prop-types";
import Stamp from "../StampItem/StampItem";

const StampList = ({ items }) => {
    // Validation.
    if(!ArrayManager.isArray(items)){
        items = [];
    }

    // Stamps.
    const stamps = items.map(item => <Stamp text={item} />);

    //Render.
    return (
        <div>
            { stamps }
        </div>
    );
};

StampList.defaultProps = {
    items: []
};

StampList.propTypes = {
    items: PropTypes.array
}

export default StampList;