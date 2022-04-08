import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

import {Text} from '../index';

import styles from './Button.style';

const Button = ({onPress, viewStyle, children}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, viewStyle]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
