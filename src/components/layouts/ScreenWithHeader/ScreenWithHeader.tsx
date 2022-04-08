import React, {FC} from 'react';
import {View} from 'react-native';

import {Header} from '../../organisms';

import styles from './ScreenWithHeader.styles';

const ScreenWithHeader: FC = ({children}) => {
  return (
    <>
      <Header />

      <View style={styles.contentContainer}>{children}</View>
    </>
  );
};

export default ScreenWithHeader;
