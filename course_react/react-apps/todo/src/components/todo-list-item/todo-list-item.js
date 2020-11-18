import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  render() {

<<<<<<< HEAD
    const { label, onDeleted,
            onToggleImportant,
            onToggleDone,
            important, done } = this.props;
=======
    const { label, onDeleted, onToggleDone, onToggleImportant,
    important, done } = this.props;
>>>>>>> 6a7c04b9f3a8b2876a78ca022e61bfdda167f133

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={ classNames }>
        <span
          className="todo-list-item-label"
<<<<<<< HEAD
          onClick={onToggleDone}>
=======
          onClick={ onToggleDone }>
>>>>>>> 6a7c04b9f3a8b2876a78ca022e61bfdda167f133
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
<<<<<<< HEAD
                onClick={onToggleImportant}>
=======
                onClick={ onToggleImportant }>
>>>>>>> 6a7c04b9f3a8b2876a78ca022e61bfdda167f133
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}

