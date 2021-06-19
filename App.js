import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './src/components/AppBar.jsx';
import MemoList from './src/components/MemoList.jsx';
import CircleButton from './src/components/CircleButton.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
