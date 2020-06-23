/**
 * Created by 狗谭 on 2020/6/8.
 */
import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import MianTabNavigator from './navigator/MianTabNavigator';
import Regist from './Regist';

const SimpleApp = createStackNavigator({
    Home:  Login ,
    Detail:  MianTabNavigator,
    Regist:Regist,
});
//AppRegistry.registerComponent('LearnRN', () => SimpleApp);
const  AppContainer = createAppContainer(SimpleApp);
export default AppContainer;