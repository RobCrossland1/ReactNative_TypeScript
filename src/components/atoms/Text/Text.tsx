import React from 'react';
import {Text as RNText} from 'react-native';

const Text = ({style, children}) => {
  return <RNText style={style}>{children}</RNText>;
};

export default Text;
