import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    // avoid page reloading
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    // clear field after submit
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="item-add-form d-flex"
            onSubmit={ this.onSubmit }>
        <input type="text"
               className="form-control"
               onChange={ this.onLabelChange }
               placeholder="What needs to be done"
              //  to check fields value for clearing it
               value={ this.state.label } />
        <button
          className="btn btn-outline-secondary">
          Add Item
        </button>
      </form>
    );
  }
};
