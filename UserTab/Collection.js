/**
 * Created by 狗谭 on 2020/6/13.
 */
import React from 'react';

import {Image,TextInput,TouchableOpacity, ScrollView, FlatList,StyleSheet, Text, View,Dimensions} from 'react-native';
//import StringDistinction from './meishiKeywords';
import Cstyle from '../HomeLIST/Cstyle';
const { width,height } = Dimensions.get('window');

export default class meishiLi extends React.Component{
    static navigationOptions = {    //这里定义导航的选项，现在只是简单的定义了标题
        title:'首页',
    };
    constructor(props){
        super(props)
        this.state={
            color:false,

            dataLis:[
                {
                    grade:require('../img/list/vip.png'),
                    id:require('../img/order/order08.jpg'),
                    type:1,
                    content:'4.9分',
                    title:'肯德基(万地店)',
                    salesvolume:202,
                    discount1:'40减6',
                    discount2:'品质联盟',
                    coupon:'16元特价',
                    qisong:0,
                    peisong:9,
                },

                {
                    grade:require('../img/list/vip.png'),
                    id:require('../img/order/order09.jpg'),
                    type:2,
                    content:'4.8分',
                    title:'五谷渔粉',
                    salesvolume:3955,
                    discount1:'20减1',
                    discount2:'40减5',
                    coupon:'',
                    qisong:15,
                    peisong:0,
                },

                {
                    grade:require('../img/list/new.png'),
                    id:require('../img/order/order10.jpg'),
                    type:3,
                    content:'4.8分',
                    title:'杨明宇黄焖鸡米饭(丽水店)',
                    salesvolume:8699,
                    discount1:'25减3',
                    discount2:'60减7',
                    coupon:'',
                    qisong:19,
                    peisong:1,

                },

            ],
            replaceText:''
        }
    }
    render(){
        return(
            <View style={Cstyle.container}>
                <FlatList
                    showsVerticalScrollIndicator = {false}
                    keyExtractor={(item,index)=>index.toString()}
                    style={Cstyle.FlatListStyle}
                    data={this.state.dataLis}
                    renderItem={({item,index})=>{
                return(
                    <View style={Cstyle.merchandise}>


                        <View style={Cstyle.merchandiseTop}>
                            <View style={Cstyle.shopLogo}>
                                <Image source={item.grade}
                                style={Cstyle.gradeLogo}
                                />
                                <Image source={item.id}
                                style={Cstyle.shopLogoss}
                                />
                            </View>

                            <View style={Cstyle.information}>
                                    <Text  style={Cstyle.titleText}>{item.title}</Text>
                                <View style={Cstyle.salesData}>
                                    <Text style={Cstyle.score}>{item.content}</Text>
                                    <Text style={Cstyle.salesnumber}>月售{item.salesvolume}</Text>
                                </View>
                                <View style={Cstyle.distributionStyle}>
                                    <Text style={Cstyle.peice}>{item.qisong}起送</Text>
                                    <Text style={Cstyle.peice}>配送费￥{item.peisong}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={()=>alert('收藏？')}
                            style={Cstyle.dianTouchable}>
                                <Image source={require('../img/list/dian.png')}
                                style={Cstyle.dian}/>
                            </TouchableOpacity>
                        </View>

                        <View style={Cstyle.merchandiseBottom}>
                            <Text style={Cstyle.discountStyle}>{item.discount1}</Text>
                            <Text style={Cstyle.discountStyle}>{item.discount2}</Text>
                            <Text style={Cstyle.couponStyle}>{item.coupon}</Text>
                        </View>

                </View>
                    )
                    }}/>
            </View>)
    }
}