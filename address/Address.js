import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StackNavigator } from 'react-navigation';

import edit_address from './edit_address';
import my_address from './my_address';

const navigationOptions = {
    title:'我的收货地址',
};

const Address = createStackNavigator({
    Home: edit_address,
    Wait: my_address

});

//AppRegistry.registerComponent('LearnRN', () => SimpleApp);
const  AppContainer = createAppContainer(Address);
export default AppContainer;