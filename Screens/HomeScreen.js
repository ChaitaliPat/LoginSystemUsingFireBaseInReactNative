import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

const HomeScreen=(props)=> {
  const logoutfunc=()=>{

  console.log('Logout called*********')
    firebase.auth().signOut()
    .then(()=>{
      props.navigation.replace('Login')
    })
    .catch(error=>{
      Alert.alert(error.message)
    })
  }
    return (
       <View>
           <Text>Welcome to App</Text>
           <Button title='Logout' onPress={logoutfunc}/>
       </View>
    )
}

HomeScreen.navigationOptions={
  headerTitle:'Home Screen',
  headerTintColor: 'teal',
  headerTitleAlign:'center',
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default HomeScreen
