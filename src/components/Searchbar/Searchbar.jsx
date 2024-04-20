import React, { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
  const searchForm = evt.currentTarget;
  const query = searchForm.element.query.value;
  this.props.onSubmit({ query });
  }

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
  autofocus
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

