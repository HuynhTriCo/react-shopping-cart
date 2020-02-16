import React, { Component } from "react";
import { connect } from "react-redux";
import { searchField } from "./actions/cartActions";
class searchBar extends Component {
  searchChange = input => {
    console.log(input.target.value)
    this.props.searchChange(input.target.value);
  };
  render() {
    return (
      <div className="input-field col s6">
        <input
          id="input_text"
          type="text"
          data-length="5"
          onChange={this.searchChange}
        />
        <label htmlFor="input_text">Input text</label>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchChange: id => {
      dispatch(searchField(id));
    }
  };
};
export default connect(null, mapDispatchToProps)(searchBar);
