import React, {FC, useState} from 'react';

import uuid from 'react-native-uuid';

import {Dashboard} from '../../components/layouts';

type TodoItemId = string | number;

interface TodoItem {
  done: boolean;
  title: string;
  id: TodoItemId;
}

const DashboardScreen: FC = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const addTodoItem = (title: string) => {
    setTodoItems(previousItems => [
      ...previousItems,
      {done: false, title, id: uuid.v4().toString()},
    ]);
  };

  const itemPressed = (id: TodoItemId) => {
    setTodoItems(previousItems => {
      const item = previousItems.find(_item => _item.id === id);

      if (!item) {
        return [...previousItems];
      }

      const filteredItems = previousItems.filter(_item => _item.id !== id);

      item.done = true;

      return [...filteredItems, item];
    });
  };

  return (
    <Dashboard
      todoItems={todoItems}
      addTodoItem={addTodoItem}
      itemPressed={itemPressed}
    />
  );
};

export default DashboardScreen;
