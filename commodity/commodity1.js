/**
 * Created by 狗谭 on 2020/6/22.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import commodityStyle from './commodityStyle'

const { width,height } = Dimensions.get('window');
export default class commodity1 extends React.Component{
    static navigationOptions = {
        title:'首页',
        headerStyle:{
            backgroundColor:'#ff9c00',

        },
        headerTintColor:'white',

    };
    render(){
        return(
            <View style={commodityStyle.container}>
                <View
                    showsVerticalScrollIndicator={false}>
                    <Image source={require('../img/jingxuan/shousi1.jpg')} style={commodityStyle.physicalFigure}/>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={commodityStyle.commodityInformation}>
                        <View style={commodityStyle.blockStyle}></View>
                        <View style={commodityStyle.information}>
                            <Text style={commodityStyle.nameStyle}>芝士鲜虾蟹黄寿司</Text>
                            <Text style={commodityStyle.salesStyle}>月售140 好评率100%</Text>
                            <View style={commodityStyle.shousiPrice}>
                                <Text style={commodityStyle.price1}>￥23.76</Text>
                                <Text style={commodityStyle.price2}>￥36</Text>
                                <Text style={commodityStyle.discount}>66折</Text>
                            </View>
                        </View>
                        <View style={commodityStyle.information}>
                            <Text style={commodityStyle.introduceStyle}>商品简介</Text>
                            <Text style={commodityStyle.introduce1}>主要原料：米饭、芝士、蟹黄、鲜虾等</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({


});