import React, {FC} from 'react';
import {TouchableOpacity, View} from 'react-native';
import TodoItem from '../../../types/TodoItem';

import {Text} from '../../atoms';

interface ItemCollectionProps {
  title: string;
  items: TodoItem[];
  onPress?: (id: string) => void;
}

const ItemCollection: FC<ItemCollectionProps> = ({title, items, onPress}) => {
  return (
    <View>
      <Text>{title}</Text>
      {items.map(item => (
        <TouchableOpacity
          onPress={() => {
            if (onPress) {
              onPress(item.id);
            }
          }}
          key={item.id}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ItemCollection;
