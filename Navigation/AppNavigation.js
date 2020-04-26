import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../Screens/Login'
import Signin from '../Screens/Signin';
import ForgotPwd from '../Screens/ForgotPwd';
import HomeScreen from '../Screens/HomeScreen';

const AppNavigation=createStackNavigator({
    
        Login:Login,
        Signin:Signin,
        ForgotPwd:ForgotPwd,
        HomeScreen:HomeScreen
    
})

export default createAppContainer(AppNavigation);
