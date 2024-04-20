import React from "react";
import PropTypes from "prop-types";

const OnError = ({ children }) => {
return (
    <div>
        {children}
    </div>
)
};

OnError.propTypes = {
    children: PropTypes.node.isRequired,
}
export default OnError;