import React, { Component } from 'react';
import{
    StyleSheet, Text, View, Dimensions, TextInput, Alert
} from 'react-native';

const { width,height } = Dimensions.get('window')

export default class LoginLeaf extends Component {
    static navigationOptions = {    //这里定义导航的选项，现在只是简单的定义了标题
        title:'新增地址',
    };

    constructor(props){
        super(props);
        this.state = {
            inputedName: '',
            inputedAddress: '',
            inputedPNum: '',
        };
        this.updateName = this.updateName.bind(this);
        this.jumpToWaiting = this.jumpToWaiting.bind(this);
    }
    updateName(newText){
        this.setState((state) =>{
            return{
                inputedName: newText,
            };
        });
    }
    updatePNum(newText){
        this.setState((state) =>{
            return{
                inputedPNum: newText,
            };
        });
    }
    updateAddress(newText){
        this.setState(()=>{
            return{
                inputedAddress: newText,
            };
        });
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.informationStyle}>
                    <Text style={styles.promptStyle}>联系人</Text>
                    <TextInput style={styles.textInputStyle}
                                placeholder={'姓名'}
                                onChangeText={this.updateName}/>
                </View>

                <View style={styles.informationStyle}>
                    <Text style={styles.promptStyle}>电话</Text>
                    <TextInput style={styles.textInputStyle}
                               placeholder={'手机号码'}
                               onChangeText={this.updatePNum.bind(this)}/>
                </View>

                <View style={styles.informationStyle}>
                <Text style={styles.promptStyle}>地址</Text>
                    <TextInput style={styles.textInputStyle}
                                placeholder={'收货地址'}
                                secureTextEntry={false}
                                onChangeText={this.updateAddress.bind(this)}/>
                </View>

                <Text style={styles.bigTextPrompt}
                        onPress={()=>this.jumpToWaiting()}>
                        保存并使用
                </Text>

            </View>
        );
    }
    jumpToWaiting(){
        this.props.navigation.navigate('Wait',  //导航跳转命令
                                {               //传递属性
                                    userName:this.state.inputedName,
                                    userPhoneNumber:this.state.inputedPNum,
                                    userAddress:this.state.inputedAddress,

                                });
    }


}
let styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    informationStyle:{
        width:0.95*width,
        marginLeft:0.025*width,
        flexDirection:'row',
        justifyContent:'center',//垂直居中
        alignItems:'center',//左右居中
        borderBottomWidth:1,
        borderBottomColor:'#ff9c00'
    },
    promptStyle:{
        width:0.15*width,
        fontSize: 17,
        //textAlign:'center',
        //borderWidth:1
    },

    textInputStyle:{
        width:0.75*width,
        backgroundColor: 'white',
        fontSize: 15,
        marginLeft:0.05*width,
    },

    bigTextPrompt:{
        backgroundColor: '#ff9c00',
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop:15,
        width:0.95*width,
        height:40,
        marginLeft:0.025*width,
        lineHeight:40,
        borderRadius:5
    }
});