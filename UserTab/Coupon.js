/**
 * Created by 狗谭 on 2020/6/13.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
const { width,height } = Dimensions.get('window');
export default class Coupon extends React.Component{
    static navigationOptions = {
        title:'我的红包',
        headerStyle:{
            backgroundColor:'#ff9c00'
        },
        headerTintColor:'white',

    };
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#E6E6E6',alignItems:'center',flexDirection:'column'}}>
                <View style={styles.couponStyle}>
                <View style={styles.couponTop}>
                    <Image
                        style={styles.shoplogoStyle}
                        source={require('../img/order/shop/shop1.jpg')}/>
                    <View style={styles.couponTopR}>
                        <View style={styles.couponTopRL}>
                            <Text style={styles.couponText1}>飘香芝士焗饭</Text>
                            <Text style={styles.couponText2}>2020.06.22-2020.06.24</Text>
                        </View>
                        <View style={styles.couponTopRR}>
                            <Text style={styles.priceText1}>￥24</Text>
                            <Text style={styles.priceText2}>满25可用</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.couponBottom}>
                    <Text style={styles.couponBottomL}>仅用于指定商家</Text>
                    <Text style={styles.couponBottomR}>去使用</Text>
                </View>
            </View>

                <View style={styles.couponStyle}>
                    <View style={styles.couponTop}>
                        <Image
                            style={styles.shoplogoStyle}
                            source={require('../img/order/shop/shop2.jpg')}/>
                        <View style={styles.couponTopR}>
                            <View style={styles.couponTopRL}>
                                <Text style={styles.couponText1}>吉祥馄饨</Text>
                                <Text style={styles.couponText2}>2020.06.18-2020.06.20</Text>
                            </View>
                            <View style={styles.couponTopRR}>
                                <Text style={styles.priceText1}>￥5</Text>
                                <Text style={styles.priceText2}>满20可用</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.couponBottom}>
                        <Text style={styles.couponBottomL}>仅用于指定商家</Text>
                        <Text style={styles.couponBottomR}>去使用</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    couponStyle:{
        width:0.96*width,
        height:0.2*height,
        backgroundColor:'white',
        marginTop:10,
        borderRadius:10
    },
    couponTop:{
        height:0.13*height,
        borderBottomWidth:2,
        borderBottomColor:'#E6E6E6',
        flexDirection:'row',
        position:'relative',
    },
    shoplogoStyle:{
        width:0.08*height,
        height:0.08*height,
        margin:0.025*height
    },
    couponTopR:{
        width:0.7*width,
        height:0.13*height,
        flexDirection:'row',
        right:0.03*width,
        position:'absolute'
    },
    couponTopRL:{
        flexDirection:'column'
    },
    couponTopRR:{
        position:'absolute',
        right:0
    },
    priceText1:{
        fontSize:28,
        fontWeight:'bold',
        color:'red',
        marginTop:0.01*height,
        marginBottom:0.01*height,

    },
    priceText2:{
        fontSize:12,
        color:'gray',
        textAlign:'center'
    },
    couponText1:{
        fontSize:18,
        marginTop:0.025*height,
        marginBottom:0.015*height,
    },
    couponText2:{
        fontSize:13,
        color:'gray'
    },
    couponBottom:{
        flexDirection:'row',
        position:'relative',
    },
    couponBottomL:{
        fontSize:13,
        color:'gray',
        height:0.07*height,
        lineHeight:0.07*height,
        marginLeft:0.025*height
    },
    couponBottomR:{
        fontSize:15,
        backgroundColor:'red',
        color:'white',
        position:'absolute',
        right:0.03*width,
        marginTop:13,
        borderRadius:10,
        width:0.15*width,
        textAlign:'center'
    }

});