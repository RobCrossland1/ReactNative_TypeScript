import React from 'react';
import {TextInput as RNTectInput} from 'react-native';

const TextInput = ({value, onChangeText}) => {
  return (
    <RNTectInput
      style={{borderColor: 'black', width: 200, height: 30, borderWidth: 1}}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default TextInput;
