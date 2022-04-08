import React from 'react';
import {TextInput as RNTectInput} from 'react-native';

// The TextInput should take two props
// value -> Will be a string value
// onChangeText -> Should be a function that has one parameter of type string. It doesn't return anything.

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
