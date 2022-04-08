import React, {FC} from 'react';
import {TouchableWithoutFeedback, View, ViewStyle} from 'react-native';

import {Text} from '../index';

import styles from './Button.style';

interface ButtonProps {
  type: 'primary' | 'secondary';
  onPress: () => void;
  viewStyle: ViewStyle;
}

const Button: FC<ButtonProps> = ({type, onPress, viewStyle, children}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, styles[type], viewStyle]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
