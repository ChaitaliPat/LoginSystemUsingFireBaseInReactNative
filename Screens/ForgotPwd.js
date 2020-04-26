import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

const ForgotPwd=()=> {
    return (
      <View style={styles.container}>
           <View style={styles.body}>
            <TextInput style={styles.textInput} placeholder='Email ID...'/>
           </View>
      </View>
    )
}

ForgotPwd.navigationOptions={
  headerTitle:'Forgot Password',
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
    }
  });


export default ForgotPwd
