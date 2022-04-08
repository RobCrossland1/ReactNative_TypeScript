import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Text} from '../../atoms';

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
