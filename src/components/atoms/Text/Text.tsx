import React from 'react';
import {Text as RNText} from 'react-native';

// The Text style should take two props
// style -> Should only accept styles for a text component. React Native may have a type we can use.
// children -> Should accept React elements. React Native may have a type we can use.

const Text = ({style, children}) => {
  return <RNText style={style}>{children}</RNText>;
};

export default Text;
