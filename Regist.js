import React,{Component} from 'react';
import{AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Image,
    Button,
    TouchableOpacity
}
    from 'react-native';

//import Button from 'react-native-button';

var { width, height } = Dimensions.get('window');

let widthOfMargin = Dimensions.get('window').width*0.05;
export default class LearnRN extends Component{
    constructor(props, context) {
        super(props, context);
    }
    _handlePress() {
        console.log('Pressed!');
    }
    enterLogin(){
        this.props.navigation.navigate('Home');
    }
    static navigationOptions = {
        header: null,
    };
    render(){

        return(
            <View style={styles.container}>
                <View style={styles.InputStyle}>
                    <View style={styles.shuruStyle}>
                        <View style={styles.tipStyle}>
                            <Image source={require('./img/mima.jpg')}
                                   style={styles.tipLogo}/>

                        </View>
                        <TextInput
                            style={styles.textInputStyle}
                            placeholder={'手机号:'}
                        />
                    </View>

                    <View style={{flexDirection:'row',marginBottom:1,backgroundColor: 'white',}}>
                        <Image source={require('./img/yzm.jpg')}
                               style={styles.tipLogo}/>
                        <TextInput style={styles.pswdStyle} placeholder={'验证码'}/>
                        <TouchableOpacity onPress={()=>alert('确定发送验证码到这个手机号？')} style={styles.fasongStyle}>
                            <Text style={styles.wordStyle}>获取验证码</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shuruStyle}>
                        <View style={styles.tipStyle}>
                            <Image source={require('./img/user1.png')}
                                   style={styles.tipLogo}/>
                        </View>
                        <TextInput style={styles.textInputStyle} placeholder={'密码:'} secureTextEntry={true}/>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => this.enterLogin()}
                                  style={{margin:0.05*width,marginBottom:5}}>

                    <Text  style={styles.registStyle}>注     册</Text>
                </TouchableOpacity>
            </View>
        );
    }
}




let styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FFDEAD',
        paddingTop:0.3*height,
    },
    /*InputStyle:{
        width:0.9*width,
        borderRadius:15,
        /!*borderWidth:1,
         borderColor:'red',*!/
        marginLeft:0.05*width,
        backgroundColor: 'white'
    },*/
    textInputStyle:{
        width:0.85*width,

        height:50,
        backgroundColor: 'white',

    },
    pswdStyle:{
        width:0.55*width,
        backgroundColor: 'white',
        height:50,
    },
    fasongStyle:{
        width:0.3*width,
        backgroundColor: 'white',
        borderLeftWidth:1,
        borderLeftColor:'gray',



        justifyContent:'center',

    },
    wordStyle:{
        fontSize:15,
        height:50,
        lineHeight:50,
        textAlign:'center',
    },

    shuruStyle:{
        width:width,
        height:50,
        flexDirection:'row',
        marginBottom:1,
    },
    tipStyle:{
        width:0.15*width,
        height:50,
        backgroundColor: 'white',

    },
    tipLogo:{
        width:30,
        height:30,
        margin:10,
        marginLeft:20,

    },
    registStyle:{
        width:0.9*width,
        height:35,
        backgroundColor:'#ff9c00',
        textAlign:'center',
        justifyContent:'center',
        lineHeight:35,
        color:'white',
        borderRadius:8,
        fontSize:20
    }


});
AppRegistry.registerComponent('LearnRN',() => LearnRN);
