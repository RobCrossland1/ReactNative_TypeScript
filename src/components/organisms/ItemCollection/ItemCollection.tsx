import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Text} from '../../atoms';

// The Text style should take two props
// title -> Should be a string
// items -> Should be an array of todo items
// onPress -> Should be a function that takes an id as a string

const ItemCollection = ({title, items, onPress}) => {
  return (
    <View>
      <Text>{title}</Text>
      {items.map(item => (
        <TouchableOpacity onPress={() => onPress(item.id)} key={item.id}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ItemCollection;
