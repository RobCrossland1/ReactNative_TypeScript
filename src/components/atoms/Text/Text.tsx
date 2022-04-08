import React, {FC} from 'react';
import {Text as RNText, TextStyle} from 'react-native';

interface TextProps {
  style?: TextStyle;
}

const Text: FC<TextProps> = ({style, children}) => {
  return <RNText style={style}>{children}</RNText>;
};

export default Text;
