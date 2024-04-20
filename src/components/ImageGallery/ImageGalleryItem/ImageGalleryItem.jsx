import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ id, src, alt, data, clickHandler }) => {
    return(
        <li >
  <img 
  id = { id }
  src = { src } 
  alt = { alt }
  data-source = { data }
  onClick = { clickHandler } 
  />
</li>
    )
};

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
}
export default ImageGalleryItem;