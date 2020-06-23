import React,{Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs'

import {
    Image,
    StyleSheet
} from 'react-native'

import HomeRootStack from './HomeStackNavigator';
import mtHome from '../mtHome';
import mtOrder from '../mtOrder';
import mtUser from '../mtUser';

//底部导航
const Tabs = {
    mtHome:{
        screen:mtHome,
        navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon:({focused})=>{
                if(!focused){
                    return<Image source={require('../img/logo1.png')}
                    style={styles.bottomTabIconStyle}
                    />
                }else{
                    return<Image source={require('../img/logo.png')}
                                 style={styles.bottomTabIconStyle}
                    />
                }
            }
        }
    },

    mtOrder:{
        screen:mtOrder,
        navigationOptions:{
            tabBarLabel:'订单',
            tabBarIcon:({focused})=>{
                if(!focused){
                    return<Image source={require('../img/order1.png')}
                                 style={styles.bottomTabIconStyle}
                    />
                }else{
                    return<Image source={require('../img/order.png')}
                                 style={styles.bottomTabIconStyle}
                    />
                }
            }
        }
    },

    mtUser:{
        screen:mtUser,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({focused})=>{
                if(!focused){
                    return<Image source={require('../img/user1.png')}
                                 style={styles.bottomTabIconStyle}
                    />
                }else{
                    return<Image source={require('../img/user.png')}
                                 style={styles.bottomTabIconStyle}
                    />
                }
            }
        }
    },
};


class MianTabNavigator extends Component{
    static navigationOptions = {
        header: null,
    };
    _tabNavigator(){
        const {mtHome,mtOrder,mtUser} = Tabs;
        const tabs = {mtHome,mtOrder,mtUser};
        if(!this.tabNavigator){
            this.tabNavigator = createAppContainer(createBottomTabNavigator(
                tabs,
                {
                    tabBarComponent:props =>(
                        <BottomTabBar {...props} activeTintColor='rgb(255,156,0)'/>
                    ),
                }
            ))
        }
        return this.tabNavigator;
    }
    render(){
        const TabNavigator = this._tabNavigator();
        return <TabNavigator/>
    }
}


const styles = StyleSheet.create({
    bottomTabIconStyle:{
        width:30,
        height:30
    }
});

export default MianTabNavigator;
