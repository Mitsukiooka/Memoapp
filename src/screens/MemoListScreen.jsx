import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList.jsx';
import CircleButton from '../components/CircleButton.jsx';
import LogOutButton from '../components/LogOutButton.jsx';
import Button from '../components/Button.jsx';
import Loading from '../components/Loading.jsx';


export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = (() => {});
    if (currentUser) {
      setLoading(true);
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          console.log(doc.id, doc.data());
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          })
        });
        setMemos(userMemos);
        setLoading(false);
    }, (error) => {
      console.log(error);
      setLoading(false);
      Alert.alert('Failed to read data');
    });
    }
    return unsubscribe;
  }, []);
  
  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading}/>
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>Create Memo!</Text>
          <Button 
            label='Create' 
            onPress={() => { navigation.navigate('MemoCreate'); }} 
            style={emptyStyles.button} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleButton name='plus' onPress={ () => { navigation.navigate('MemoCreate'); }}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  }
})