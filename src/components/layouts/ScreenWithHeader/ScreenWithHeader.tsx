import React from 'react';
import {StatusBar, View} from 'react-native';

import {Header} from '../../organisms';

import styles from './ScreenWithHeader.styles';

const ScreenWithHeader = ({children}) => {
  return (
    <View style={styles.screen}>
      <Header />

      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

export default ScreenWithHeader;
