import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick }) => {
    return(
        <div>
            <button onClick={onClick}> Load More </button>
        </div>
        
    );
};
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Button;