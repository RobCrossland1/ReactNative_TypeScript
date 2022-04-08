import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

import {DashboardScreen} from './src/screens';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={{backgroundColor: '#db4c3f'}}>
        <StatusBar barStyle="light-content" />
      </SafeAreaView>

      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <DashboardScreen />
      </ScrollView>
    </View>
  );
};

export default App;
