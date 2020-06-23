/**
 * Created by 狗谭 on 2020/6/5.
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

import User from './User';
import Address from './address/Address';
import Coupon from'./UserTab/Coupon';
import Collection from'./UserTab/Collection';
import Service from'./UserTab/Service';

const SimpleApp = createStackNavigator({
    User: User ,
    Address:  Address ,
    Coupon:Coupon,
    Collection:Collection,
    Service:Service,

});
//AppRegistry.registerComponent('LearnRN', () => SimpleApp);
const  AppContainer = createAppContainer(SimpleApp);
export default AppContainer;