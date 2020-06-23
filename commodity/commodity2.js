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
                    <Image source={require('../img/jingxuan/naicha.jpg')} style={commodityStyle.physicalFigure}/>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={commodityStyle.commodityInformation}>
                        <View style={commodityStyle.blockStyle}></View>
                        <View style={commodityStyle.information}>
                            <Text style={commodityStyle.nameStyle}>泰式蛋糕奶茶</Text>
                            <Text style={commodityStyle.salesStyle}>月售72 好评率100%</Text>
                            <View style={commodityStyle.shousiPrice}>
                                <Text style={commodityStyle.price1}>￥17.6</Text>
                                <Text style={commodityStyle.price2}>￥22</Text>
                                <Text style={commodityStyle.discount}>8折</Text>
                            </View>
                        </View>
                        <View style={commodityStyle.information}>
                            <Text style={commodityStyle.introduceStyle}>商品简介</Text>
                            <Text style={commodityStyle.introduce1}>主要原料：牛奶、红茶、奥利奥饼干碎</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({


});