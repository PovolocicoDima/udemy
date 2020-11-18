import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

<<<<<<< HEAD
const TodoList = ({ todos, onDeleted,
                  onToggleImportant,
                  onToggleDone }) => {
=======
const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
>>>>>>> 6a7c04b9f3a8b2876a78ca022e61bfdda167f133

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps }
<<<<<<< HEAD
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
=======
          onDeleted={() => onDeleted(id)} 
          onToggleDone={() => onToggleDone(id)}  
          onToggleImportant={() => onToggleImportant(id)}  
>>>>>>> 6a7c04b9f3a8b2876a78ca022e61bfdda167f133
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
