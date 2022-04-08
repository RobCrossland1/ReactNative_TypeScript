import React, {FC} from 'react';
import {Text as RNText, ViewStyle} from 'react-native';

interface TextProps {
  type: 'header' | 'paragraph';
  style?: ViewStyle;
}

const Text: FC<TextProps> = ({style, children}) => {
  return <RNText style={style}>{children}</RNText>;
};

export default Text;
