import React, {useState} from 'react';
import {View} from 'react-native';

import {Divider, Button, Text, TextInput} from '../../atoms/index';
import {ItemCollection} from '../../organisms/index';
import {ScreenWithHeader} from '../../layouts/index';

import styles from './Dashboard.styles';

const Dashboard = ({todoItems, addTodoItem, itemPressed}) => {
  const [todoItem, setTodoItem] = useState();

  const addTodoItemPressed = item => {
    if (item === '') {
      return;
    }

    setTodoItem('');

    addTodoItem(item);
  };

  return (
    <ScreenWithHeader>
      <Text>Add an item...</Text>
      <View style={styles.addItemContainer}>
        <TextInput value={todoItem} onChangeText={setTodoItem} />
        <Button
          viewStyle={styles.addItemButton}
          onPress={() => addTodoItemPressed(todoItem)}>
          Add
        </Button>
      </View>

      <Divider />

      <ItemCollection
        title="Still to do..."
        items={todoItems.filter(item => !item.done)}
        onPress={itemPressed}
      />

      <Divider />

      <ItemCollection
        title="Completed items..."
        items={todoItems.filter(item => item.done)}
      />
      <Divider />
    </ScreenWithHeader>
  );
};

export default Dashboard;
