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
    TouchableOpacity,
    ScrollView
} from 'react-native';
const { width,height } = Dimensions.get('window');
export default class mtOrder extends React.Component{
    static navigationOptions = {
        title:'',
        headerStyle:{
            backgroundColor:'#ff9c00'
        },
        headerTintColor:'white',
        headerRight:()=>(
            <View
                style={styles.headerLogo}>
                <Image
                    source={require('../img/logo.png')}
                    style={{width:0.15*width,height:0.15*width,borderRadius:0.075*width,margin:0.005*width}}/>
            </View>

        )
    };
    render(){
        return(
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{flex:1,backgroundColor:'#EEEEEE',flexDirection:'column'}}>
                <View
                    style={{marginLeft:0.05*width,width:0.9*width,height:0.6*height,backgroundColor:'white',marginTop:0.05*height,borderRadius:20,alignItems:'center'}}>
                    <View style={styles.tipsStyle}>
                        <Image
                            source={require('../img/problem.png')}
                            style={{width:0.15*width,height:0.15*width}}/>
                        <Text style={{fontSize:22,lineHeight:0.15*width,marginLeft:20}}>常见问题</Text>
                    </View>
                        <TouchableOpacity onPress={()=>alert('如商家拒绝您的退单申请，您可以按照以下情况处理：' +
                         '1.如问题已解决，您不需要做任何操作，订单会自动完成；2.如问题未解决仍需退单，请您在商家拒绝退单后24小时内点击申请客服介入按钮提交客服处理哦。')}
                                          style={styles.problemStyle}
                        >
                            <Text style={styles.proTextStyle}>商家拒绝退单怎么办？</Text>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={()=>alert('非常抱歉给您带来不便，订单下单成功后骑手或商家会尽快为您配送，如订单出现超时您可以按照以下方式处理：1.如您的订单下单已超30分钟，可以在订单上点击“催单”按钮进行催单；2.如您的订单没有骑手配送信息，您可以点击订单上的“联系商家”按钮进行咨询订单配送进度；3.如您有骑手配送信息，您可以点击“联系骑手”按钮进行催促；4.准时达订单超时后送达系统会自动根据超时时间及订单金额计算超时赔付以表歉意，感谢您的谅解，如需反馈配送问题，您也可以点击【订单投诉】按钮提交投诉哦~')}
                                      style={styles.problemStyle}
                    >
                        <Text style={styles.proTextStyle}>我的订单超时了怎么办？</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>alert('如长时间没有骑士接单，建议您按照以下情况处理：1.【商家自配送订单】：由商家为您自行配送，不会有骑士接单，建议您联系商家催单；2.【蜂鸟配送订单】：订单下单后会尽快分配骑士配送，如果您的订单长时间未分配骑士，建议您及时联系商家进行配送；3.如果您已无法等待，建议您先更换其他方式用餐，小e感谢您的谅解与支持，祝您用餐愉快！')}
                                      style={styles.problemStyle}
                    >
                        <Text style={styles.proTextStyle}>订单一直没有配送员接单怎么办？</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>alert('如需修改联系电话，请按以下情况处理：1.【商家配送订单】，在提交订单后商家接单前可以修改收餐电话，商家接单后请联系商家修改，如电话无法联系，您可通过在线联系哦~2.【蜂鸟配送订单】，在订单完成前可以修改收餐电话，在订单页点击【修改订单信息】进行修改即可。')}
                                      style={styles.problemStyle}
                    >
                        <Text style={styles.proTextStyle}>下单后怎么更改联系电话？</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>alert('请您选择好商品之后，点击“去结算”—点击餐具份数/口味偏好，根据您的需求进行备注即可。')}
                                      style={styles.problemStyle}
                    >
                        <Text style={styles.proTextStyle}>订单忘记备注怎么办</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>alert('获得的红包不可用，您可以在下单时点击【无可用红包】按钮，查看具体红包不可用的原因。同时，您也可以在我的-红包页面查看您要使用的红包的限制条件，可根据条件调整订单进行使用哦~')}
                                      style={styles.problemStyle}
                    >
                        <Text style={styles.proTextStyle}>红包为什么使用不了？</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>alert('确定拨打电话10001吗？')}
                                      style={styles.phoneStyle}
                    >
                        <Text style={styles.phoneTextStyle}>电话客服:10001</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.onlineService}
                >
                    <Text style={{height:0.08*height,lineHeight:0.08*height,textAlign:'center',color:'white',fontSize:20}}>在线客服</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    headerLogo:{
        width:0.16*width,
        height:0.16*width,
        backgroundColor:'white',
        borderRadius:0.08*width,
        marginRight:0.42*width,
        marginTop:0.05*height
    },
    tipsStyle:{
        width:0.8*width,
        height:0.15*width,
        marginTop:0.02*height,
        flexDirection:'row',

    },

    problemStyle:{
        width:0.8*width,
        height:0.08*height,
        borderTopWidth:1,
        borderTopColor:'#ff9c00'
    },
    proTextStyle:{
        fontSize:15,
        lineHeight:0.08*height
    },
    phoneStyle:{
        width:0.3*width,
        height:0.04*height,
        borderRadius:10,
        backgroundColor:'#E6E6E6',
        marginTop:20,
        marginLeft:0.35*width,
    },
    phoneTextStyle:{
        height:0.08*height,
        lineHeight:0.04*height,
        textAlign:'center',
        color:'gray',
        fontSize:12,
    },
    onlineService:{
        width:0.9*width,
        height:0.08*height,
        backgroundColor:'#ff9c00',
        marginTop:20,
        borderRadius:10,
        marginLeft:0.05*width,
    }

});