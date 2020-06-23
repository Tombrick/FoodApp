/**
 * Created by 狗谭 on 2020/6/21.
 */
import React from 'react';

import {Image,TextInput,TouchableOpacity, ScrollView, FlatList,StyleSheet, Text, View,Dimensions} from 'react-native';
//import StringDistinction from './meishiKeywords';
import Cstyle from './Cstyle';
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
                    id:require('../img/order/order01.jpg'),
                    type:1,
                    content:'4.9分',
                    title:'味道招牌水煮鱼',
                    salesvolume:1602,
                    discount1:'55减8',
                    discount2:'88减18',
                    coupon:'5元无门槛红包',
                    qisong:20,
                    peisong:2,
                },

                {
                    grade:require('../img/list/vip.png'),
                    id:require('../img/order/order02.jpg'),
                    type:2,
                    content:'4.8分',
                    title:'养生粥铺',
                    salesvolume:3955,
                    discount1:'20减1',
                    discount2:'40减5',
                    coupon:'',
                    qisong:15,
                    peisong:0,
                },

                {
                    grade:require('../img/list/new.png'),
                    id:require('../img/order/order03.jpg'),
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
                {
                    grade:require('../img/list/new.png'),
                    id:require('../img/order/order04.jpg'),
                    type:4,
                    content:'4.9分',
                    title:'五谷鱼粉(丽水店)',
                    salesvolume:9711,
                    discount1:'20减1',
                    discount2:'88减18',
                    coupon:'7元无门槛红包',
                    qisong:19,
                    peisong:3,

                },
                {
                    grade:require('../img/list/new.png'),
                    id:require('../img/order/order05.jpg'),
                    type:5,
                    content:'4.6分',
                    title:'家常美食小炒',
                    salesvolume:5325,
                    discount1:'80减5',
                    discount2:'150减15',
                    qisong:50,
                    peisong:5,
                },
                {
                    id:require('../img/order/order06.jpg'),
                    type:6,
                    content:'4.6分',
                    title:'川渝麻辣香锅',
                    salesvolume:3210,
                    discount1:'19减1',
                    discount2:'59减9',
                    coupon:'6元无门槛红包',
                    qisong:22,
                    peisong:2,
                },
                {
                    grade:require('../img/list/new.png'),
                    id:require('../img/order/order07.jpg'),
                    type:7,
                    content:'4.8分',
                    title:'轻食意面',
                    salesvolume:983,
                    discount1:'30减3',
                    discount2:'78减8',
                    coupon:'6元无门槛红包',
                    qisong:25,
                    peisong:2,
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