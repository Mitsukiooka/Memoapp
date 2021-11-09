import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Movie Log</Text>
        <Text style={styles.appbarRight}>Log out</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467fd3',
    justifyContent: 'flex-end'
  },
  appbarInner: {
    alignItems: 'center'
  },
  appbarRight: {
    position: 'absolute',
    right: 16,
    bottom: 8,
    color: 'rgba(255, 255, 255, 0.8)'
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold'
  },
});