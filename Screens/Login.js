import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import * as firebase from 'firebase';

const Login=(props)=> {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log("*****************",props.navigation.navigate)
  const userLogIn = (email,password) =>{
    console.log(email,password)
    firebase.auth().signInWithEmailAndPassword(email,password)
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
           <Image style={styles.imageLogin} source={
             require('../assets/LoginImage.jpg')
             }/>
           <TextInput style={styles.textInput} placeholder='Email ID...' 
                                               onChangeText={email=>setEmail(email)} />
           <TextInput style={styles.textInput} placeholder='Password...' secureTextEntry={true}
                                               onChangeText={password=>setPassword(password)} />
           <View style={styles.buttonContainerPosition}>
           <View style={styles.buttonContainer}>
           <Button title='LOGIN' color='#008080' onPress={()=>{userLogIn(email,password)}}/>
           </View>
           </View> 
             <View style={styles.features}>
             <TouchableOpacity onPress={()=>{props.navigation.navigate('Signin')}}><Text>New User?</Text></TouchableOpacity>
             <TouchableOpacity onPress={()=>{props.navigation.navigate('ForgotPwd')}}><Text>Forgot Passwod?</Text></TouchableOpacity>
             </View>
             {/* <Text>{email}</Text> 
            <Text>{password}</Text>  */}
           </View>
           
       </View>
    )
    }

    Login.navigationOptions={
      headerTitle:'Log In',
      headerTintColor: 'teal',
      headerTitleAlign:'center',
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    imageLogin:{
      marginTop:10,
      marginBottom:10,
      width:'100%',
      height:'40%',
      borderRadius:10,
      borderWidth:1,
      borderColor:'teal',
    },
    body:{
      // backgroundColor: '#fff',
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
      width:'20%',
    },
    features:{
      marginTop:25,
      flexDirection:'row',
      justifyContent:'space-between',
    }
  });


export default Login
