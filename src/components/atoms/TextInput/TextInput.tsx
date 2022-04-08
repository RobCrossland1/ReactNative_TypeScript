import React, {FC} from 'react';
import {TextInput as RNTectInput} from 'react-native';

import styles from './TextInput.styles';

interface TextInputProps {
  value: string;
  onChangeText: (value: string) => void;
}

const TextInput: FC<TextInputProps> = ({value, onChangeText}) => {
  return (
    <RNTectInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default TextInput;
