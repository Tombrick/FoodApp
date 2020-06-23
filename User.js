import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    AsyncStorage,
    TouchableNativeFeedback,
    Modal,
    TextInput,
    TouchableOpacity,
    BVLinearGradient
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient'
const { width,height } = Dimensions.get('window');




var options1 = {
    title: '上传头像',
    takePhotoButtonTitle:'拍照',
    cancelButtonTitle:'取消',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    maxWidth: 600,
    maxHeight: 600,
    aspectX: 2,
    aspectY: 1,
    allowsEditing:true,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};




export default class ff extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        var user = this.props.user || {} //是从index.android.js中传过来的user，是state
        this.state = {
            user: user,    //user是一个对象
            isNewAvatar: true,
            showHide: false,
            text: ''
        };
        this.toAddress = this.toAddress.bind(this);
        this.toCoupon = this.toCoupon.bind(this);
        this.toCollection = this.toCollection.bind(this);
        this.toService = this.toService.bind(this);
    }

    componentDidMount() {
        var that = this;
        AsyncStorage.getItem('user')
            .then( (data) => {
                // console.log(data)


                if(data) {
                    var user = JSON.parse(data)
                }

                // console.log(user)

                if( user && user.accessToken){
                    that.setState({
                        user: user
                    });
                }
            })
        //在组件第一次加载完毕后，要得到在AsyncStorage.setIetm()中的text的值。
        // 要分两种情况，一种是初始化的时候，一种是当TextInput总的text改变的时候，都要把state改过来
        AsyncStorage.getItem('text')
            .then( (aa) => {
                this.setState({
                    text: aa
                })
            })
    }

    _pickPhoto() {
        var that = this;
        // console.log(22222)
        ImagePicker.showImagePicker(options1, (response) => {
                console.log('Response = ', response);

                if (response.didCancel) {   //取消选择的时候，返回
                    // console.log('User cancelled image picker');
                    return
                }
                // console.log(response)    //是一个对象，里面有uri
                var avatarUri = response.uri;
                // console.log(avatarUri);  //是一个字符串
                var user = that.state.user;

                user.avatar = avatarUri;

                that.setState({
                    user: user
                });
                var user = this.state.user;
                // console.log(user)
                var NewImage = JSON.stringify(user)
                AsyncStorage.setItem('user',NewImage)   //AsyncStorage.setItem只能存字符串。所以要JSON.stringify
                                                        //把新的user保存在本地
            }
        );
    }

    _switchModal(aa) {
        this.setState({
            showHide: aa
        });
    }

    // _onShow() {
    //     alert('打开了')
    // }
    render() {
        var user = this.state.user;
        return (
            <View style={styles.container}>

                {/* 弹出层 */}
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.showHide}
                    onRequestClose={() => {this._switchModal(false)}}
                    //onShow={this._onShow.bind(this)} 显示完毕调用的函数，139行
                >
                    <View style={{ backgroundColor:'white',flex:1,zIndex:20}}>
                        <View>
                            <TouchableNativeFeedback onPress={ this._pickPhoto.bind(this) }>
                                <View style={ styles.modalAvatar} >
                                    <Image source={{ uri: user.avatar}} style={styles.avatarModal}></Image>
                                    <Text style={ styles.modalAvatarText}>设置头像</Text>
                                    </View>
                            </TouchableNativeFeedback>

                            <View style={styles.xiugainicheng}>
                                <Text style={ styles.xiugainichengText}>修改昵称：</Text>
                                <TextInput
                                    placeholder={this.state.text}
                                    onChangeText={ (text) => {
                                        AsyncStorage.setItem('text',text)
                                        AsyncStorage.getItem('text')
                                            .then( (aa) => {
                                                this.setState({
                                                    text: aa
                                                })
                                            })
                                    }}
                                    style={{ width:300,padding: 0,fontSize: 16,flex:1,marginLeft: 10}}
                                    underlineColorAndroid="transparent"
                                >
                                </TextInput>
                            </View>

                            {/*返回箭头*/}
                            <TouchableNativeFeedback onPress={() => {
                                this._switchModal(false)
                            }}>
                                <View style={styles.close}>
                                    <Image source={ require('./img/ok.png') } style={{width:0.18*width,height:0.18*width}}></Image>


                                </View>
                            </TouchableNativeFeedback>

                        </View>
                    </View>
                </Modal>


                <View style={ styles.top }>
                    <View style={ [styles.imageContainer , {}]}>
                        {/*背景*/}
                        <Image source={ require('./img/userbg.jpg') }
                               blurRadius={2}
                               style={styles.avatarBackground} ></Image>

                        {/*设置icon*/}
                        <TouchableNativeFeedback
                            background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
                            onPress={ () => {this._switchModal(true)}} >
                            <View style={ styles.setIcon }>
                                <View style={{width: 0.16*height,height:0.16*height,borderWidth:2,borderColor:'#ff9c00',borderRadius:0.08*height}}></View>
                                {/*用户名*/}
                                <View style={ styles.avatarTextContainer}>
                                    <Text style={ styles.avatarText1 }>{ this.state.text}</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>

                        {/*头像*/}
                        {
                            this.state.isNewAvatar
                                ?
                                <Image source={{ uri: user.avatar}} style={styles.avatar}></Image>
                                :
                                <Image source={ require('./img/mima.jpg') } style={styles.avatar}></Image>


                        }



                    </View>

                </View>

                <LinearGradient
                    colors={["#ffffcc","#FFDEAD"]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.memberStyle}>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.memberText}>成为超级会员，领取大额红包</Text>
                    <Image source={ require('./img/logo1.png') } style={styles.memberCoupon}></Image>
                </View>
                    </LinearGradient>
                <View  style={styles.tabStyle}>
                    <TouchableOpacity
                        onPress={()=>this.toAddress()}
                        style={styles.tabcontent}>
                        <Image source={ require('./img/tab/address.jpg') } style={styles.tablogoLeft}/>
                        <Text style={styles.tabText}>我的收货地址</Text>
                        <Image source={ require('./img/tab/to.png') } style={styles.tablogoRight}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>this.toCoupon()}
                        style={styles.tabcontent}>
                        <Image source={ require('./img/tab/coupon.png') } style={styles.tablogoLeft}/>
                        <Text style={styles.tabText}>我的红包</Text>
                        <Image source={ require('./img/tab/to.png') } style={styles.tablogoRight}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>this.toCollection()}
                        style={styles.tabcontent}>
                        <Image source={ require('./img/tab/collection.png') } style={styles.tablogoLeft}/>
                        <Text style={styles.tabText}>我的收藏</Text>
                        <Image source={ require('./img/tab/to.png') } style={styles.tablogoRight}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>this.toService()}
                        style={styles.tabcontent}>
                        <Image source={ require('./img/tab/service.png') } style={styles.tablogoLeft}/>
                        <Text style={styles.tabText}>我的客服</Text>
                        <Image source={ require('./img/tab/to.png') } style={styles.tablogoRight}/>
                    </TouchableOpacity>

                </View>
            </View>




        );
    }
    toAddress(){
        this.props.navigation.navigate('Address');
    }
    toCoupon(){
        this.props.navigation.navigate('Coupon');
    }
    toCollection(){
        this.props.navigation.navigate('Collection');
    }
    toService(){
        this.props.navigation.navigate('Service');
    }



}

const styles = StyleSheet.create({
    container: {
        height:height,
        backgroundColor: 'white',

    },
    avatarBackground: {
        width:width,
        height:0.2*height,
        backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        opacity:0.5
    },
    avatar: {
        width: 0.16*height,
        height:0.16*height,
        borderRadius:0.08*height,
        position:'absolute',
        top:0.02*height,
        left:0.02*height,
    },
    avatarText: {
        color: 'white',
        position:'absolute',
        bottom: 20,
        //left: width/2-30,
        fontSize: 22,
        borderWidth:1

    },
    avatarTextContainer: {
        //justifyContent:'center',
        //alignItems:'center',
        position:'relative',
        bottom: 0.1*height,

    },
    avatarText1: {
        color:'white',
        fontSize: 25,
        left:0.2*height,
    },
    //换头像按钮
    setIcon: {
        position: 'absolute',
        width: 0.16*height,
        height:0.16*height,
        borderRadius:0.08*height,
        zIndex:10,
        top:0.02*height,
        left:0.02*height
    },
    modalAvatar: {
        paddingTop:60,
        paddingBottom: 60,
        flexDirection:'column',
        justifyContent:'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    modalAvatarText: {
        fontSize: 20,
        width:width,
        top:20,
        textAlign: 'center',
    },
    avatarModal:{
        width: 100,
        height: 100,
        borderRadius: 50
    },
    xiugainicheng: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop:14,
        paddingBottom:14,
        borderBottomWidth: 1,
        borderBottomColor: '#ff9c00'
    },
    xiugainichengText: {
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        //marginTop: 2
    },
    close: {
        position: 'absolute',
        width:0.2*width,height:0.2*width,
        top:0.5*height,
        left:0.4*width,
        borderWidth:3,
        borderColor:'#ff9c00',
        borderRadius:0.1*width,

    },




    memberStyle:{
        //backgroundColor:'#FFDEAD',
        width:0.98*width,
        margin:0.01*width,
        height:0.15*height,
        borderRadius:10,

    },
    memberText:{
        fontSize: 20,
        color:'#660000',
        left:20,
        lineHeight:0.15*height
    },
    memberCoupon:{
        width:0.13*height,
        height:0.13*height,
        left:0.1*width,
        top:0.01*height,
        zIndex:10,
    },

    tabStyle:{

        width:width,
    },
    tabcontent:{
        //backgroundColor:'gray',
        width:width,
        height:0.08*height,
        borderBottomWidth:1,
        borderBottomColor:'#ff9c00',
        flexDirection: 'row',
    },
    tablogoLeft:{
        width:0.04*height,
        height:0.04*height,
        left:20+0.01*width,
        top:0.02*height
    },
    tablogoRight:{
        width:0.03*height,
        height:0.03*height,
        left:0.42*width,
        top:0.025*height
    },
    tabText:{
        width:0.4*width,

        fontSize: 18,
        left:0.1*width,
        lineHeight:0.08*height
    }

});