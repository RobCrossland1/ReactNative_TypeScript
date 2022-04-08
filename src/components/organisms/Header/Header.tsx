import React from 'react';
import {View} from 'react-native';

import {Text} from '../../atoms';

import styles from './Header.styles';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Another To-Do app...</Text>
  </View>
);

export default Header;
