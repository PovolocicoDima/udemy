import React, { FC, useEffect, useState } from "react";
import List from "./List";
import { ITodo } from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodosPage: FC = () => {
  const [todo, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  // @ts-ignore
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      // @ts-ignore
      alert(e);
    }
  }

  return (
    <List
      items={todo}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
