import React, { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  const searchForm = e.currentTarget;
  const query = searchForm.elements.query.value;
  this.props.onSubmit({ query });
  };

render() {
  return(
    <header >
<form  onSubmit={this.handleSubmit}>
<button type="submit" >
  <span >Search</span>
</button>

<input

  name="query"
  type="text"
  autocomplete="off"
  
  placeholder="Search images and photos"
/>
</form>
</header>
)
} 
};
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

