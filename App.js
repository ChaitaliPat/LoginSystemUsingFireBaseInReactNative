import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './Navigation/AppNavigation';
import * as firebase from 'firebase';
import {firebaseConfig} from './Screens/fbConfig'
firebase.initializeApp(firebaseConfig)

export default function App() {
  return (
      <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
  },
});
