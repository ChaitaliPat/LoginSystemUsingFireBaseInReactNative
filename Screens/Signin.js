import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import * as firebase from 'firebase';

const Signin=(props)=> {
  const [fname, setFName] = useState('')
  const [lname, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log("*****************",props.navigation.navigate)

  const userSignIn = (email,password) =>{
    console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(()=>{
      props.navigation.replace('HomeScreen')
    })
    .catch(error=>{
      Alert.alert(error.message)
    })
  }
  return (    
      <View style={styles.container}>
       <View style={styles.body}>
         <TextInput style={styles.textInput} placeholder='First Name...' onChangeText={fname=>setFName(fname)}/>
         <TextInput style={styles.textInput} placeholder='Last Name...' onChangeText={lname=>setLName(lname)}/>
         <TextInput style={styles.textInput} placeholder='Email ID...' onChangeText={email=>setEmail(email)}/>
         <TextInput style={styles.textInput} placeholder='Password...' onChangeText={password=>setPassword(password)} secureTextEntry={true}/>
         <View style={styles.buttonContainerPosition}>
         <View style={styles.buttonContainer}>
         <Button title='SIGNUP' color='#008080' onPress={()=>{userSignIn(email,password)}}/>
        {/* <Text>{fname}</Text>
        <Text>{lname}</Text>
        <Text>{email}</Text>
        <Text>{password}</Text> */}
         </View>
         </View>
         </View>
         </View>
  )
}

Signin.navigationOptions={
  headerTitle:'Sign In',
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
  body:{
    // backgroundColor: '#fff',
     marginTop:20,
     width:'80%',
     height:'70%',

  },
  textInput:{
    height:50,
    borderColor:'black',
    borderWidth:1,
    borderRadius:10,  
    marginBottom:20,
    paddingLeft:10,
  },
  buttonContainerPosition:{
    justifyContent:'center',
    alignItems:'center',
  },
  buttonContainer:{
    width:'25%',
  }
});



export default Signin
