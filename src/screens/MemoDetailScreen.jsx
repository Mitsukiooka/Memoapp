import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar.jsx';
import CircleButton from '../components/CircleButton.jsx';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2021年6月19日 18:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          最もスタンダードと言っても良い方法では無いでしょうか。この方法では、RailsをAPIとして作成し、全く別のReactのアプリケーションを作成します。以下の様な利点があります。
          Railsの問題はRailsで、Reactの問題はReactでと完全に別々で対処できる。
          Reactアプリケーション以外にもモバイルアプリなど、他のクライアントにも対応することができるので多様な使い方ができ、よりスケールしやすい。
          この方法ではRailsとReactアプリを別々で作成し、RailsがJSON化した情報を送り、クライアント側がリクエストで受け取る構造をとりますのでそれぞれの作り方は以下を参考にしてください。
        </Text>
      </ScrollView>
      <CircleButton name='edit-2' style={{ top: 160, bottom: 'auto' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#467fd3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24
  }
});