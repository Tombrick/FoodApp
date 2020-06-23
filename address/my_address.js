import React, { Component } from 'react';
import{
    StyleSheet, Text, View,Dimensions
} from 'react-native';

import PropTypes from 'prop-types';
const { width,height } = Dimensions.get('window')

export default class WaitingLeaf extends Component{
    static navigationOptions = {
        title:'我的收货地址',
    };
    constructor(props){
        super(props);
        this.onGobackpressed = this.onGobackpressed.bind(this);
    }
    render(){
        const{ params } = this.props.navigation.state;
        return(
            <View style={styles.bodyStyle}>
            <View style={styles.container}>
                <View style={styles.textconStyle}>
                    <Text style={styles.textaddressStyle}>{params.userAddress}</Text>
                    <Text style={styles.textnameStyle}>{params.userName}</Text>

                    <Text style={styles.textphoneStyle}>{params.userPhoneNumber}</Text>

                </View>
                <Text style={styles.bigTextPrompt}
                        onPress={this.onGobackpressed}>
                    新增地址
                </Text>
            </View>
            </View>
        );
    }
    onGobackpressed(){
        this.props.navigation.goBack();         //弹出当前界面,返回上一个界面
    }
    /*onGobackpressed(){
        this.props.navigation.goBack();         //弹出当前界面,返回上一个界面
    }*/
}
WaitingLeaf.propTypes ={                        //注意此时属性类型检查将不再生效
    phoneNumber: PropTypes.string,              //因为传递的属性不在 this.props 下
    userAddress: PropTypes.string,
    userPhoneNumber:PropTypes.string
    }
let styles = StyleSheet.create({
    bodyStyle:{
        flex:1,
        backgroundColor: 'white',

    },
    container: {
        width:0.9*width,
        marginLeft:0.05*width,
        marginTop:20,
        backgroundColor: '#fff1db',

        borderRadius:10
    },
    textconStyle:{
        width:0.8*width,
        //borderWidth:1,
        borderBottomWidth:1,
        borderBottomColor:'#ff9c00',
        flexDirection:'row',
        flexWrap: 'wrap',
        marginLeft:0.05*width,
        marginTop:20,
        paddingBottom:20
    },
    textaddressStyle: {
        width:0.8*width,
        fontSize: 20,
        //borderWidth:1,

    },
    textnameStyle:{
        width:0.2*width,
        fontSize: 20,
        color:'gray'
    },
    textphoneStyle:{
        width:0.55*width,
        fontSize: 20,
        color:'gray'
    },
    bigTextPrompt: {
        marginTop:20,
        width: 0.9*width,
        height:40,
        lineHeight:40,
        backgroundColor: '#ff9c00',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        borderRadius:10
    }
});