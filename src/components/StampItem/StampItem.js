import React from "react";
import PropTypes from "prop-types";
import StringManager from "../../utils/strings/StringManager";

const StampItem = ({ text }) => {

    if(!StringManager.isString(text)){
        text="Invalid text";
    }

    return (
        <span>
            {text.toUpperCase()}
        </span>
    );
};

StampItem.defaultProps = {
    text: "",
};

StampItem.propTypes = {
    text: PropTypes.string,
};

export default StampItem;