/**
 * Created by 狗谭 on 2020/6/22.
 */
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

import mtHomex from './mtHomex';
import meishiLi from './HomeLIST/meishiLi';
import commodity1 from './commodity/commodity1';
import commodity2 from './commodity/commodity2';

const navigationOptions = {
    header: null,
};

const Address = createStackNavigator({
    Home: {screen: mtHomex},
    meishiLi: {screen: meishiLi},
    commodity1: {screen: commodity1},
    commodity2: {screen: commodity2}
});

const  AppContainer = createAppContainer(Address);
export default AppContainer;