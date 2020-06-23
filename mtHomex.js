import React from 'react';
import {
  StyleSheet,
  View,
  Text,
    TextInput,
  Button,
    Image,
    TouchableOpacity,
    Dimensions,
    ScrollView,
BVLinearGradient
} from 'react-native';


import Swiper from 'react-native-swiper'
import LinearGradient from 'react-native-linear-gradient'
const { width,height } = Dimensions.get('window')


export default class mtHome extends React.Component{
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
        };
        this.tomeishiLi = this.tomeishiLi.bind(this);
        this.tocommodity1 = this.tocommodity1.bind(this);
        this.tocommodity2 = this.tocommodity2.bind(this);
    }
    render(){
        return (

            <View style={styles.container}>
                <View style={styles.headerStyle}>
                    <TouchableOpacity onPress={()=>alert('扫一扫')}
                                      style={{}}
                    >
                        <Image
                            source={require('./img/saoyisao.png')}
                            style={{width:0.08*width,height:0.08*width,}}
                        />
                    </TouchableOpacity>

                    <View style={styles.searchStyle}>
                        <TextInput
                            style={styles.searchInputStyle}
                            placeholder="  搜索..."
                            clearButtonMode="while-editing"
                        />
                        <TouchableOpacity
                                          style={{width:0.03*height,height:0.03*height,margin:0.01*height}}
                        >
                            <Image
                                source={require('./img/sousuo.png')}
                                style={{width:0.03*height,height:0.03*height}}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={()=>alert('设置')}
                                      style={{}}
                    >
                        <Image
                            source={require('./img/shezhi.png')}
                            style={{width:0.042*height,height:0.042*height}}
                        />
                    </TouchableOpacity>
                </View>

<ScrollView showsVerticalScrollIndicator={false}>
                <Swiper
                    style={styles.swiperStyle}                   //组件高度
                    loop={true}                    //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                    autoplay={true}                //自动轮播
                    autoplayTimeout={4}                //每隔4秒切换
                    horizontal={true}              //水平方向，为false可设置为竖直方向
                    paginationStyle={{height:10,top:0.275*height}} //小圆点的位置：距离底部10px
                    showsButtons={false}           //为false时不显示控制按钮
                    showsPagination={true}       //为false不显示下方圆点
                    dot={<View style={{           //未选中的圆点样式
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 5,
                            height: 5,
                            borderRadius: 2.5,
                            marginLeft: 10,
                            marginRight: 9,
                            marginTop: 9,
                            marginBottom: 9,
                        }}/>}
                    activeDot={<View style={{    //选中的圆点样式
                                backgroundColor: 'white',
                                width: 5,
                                height: 5,
                                borderRadius: 2.5,
                                marginLeft: 10,
                                marginRight: 9,
                                marginTop: 9,
                                marginBottom: 9,
                            }}/>}
                >
                    <Image source={require('./img/lunbo/lb1.jpg')} style={styles.lbimg}/>
                    <Image source={require('./img/lunbo/lb2.jpg')} style={styles.lbimg}/>
                    <Image source={require('./img/lunbo/lb3.jpg')} style={styles.lbimg}/>
                    <Image source={require('./img/lunbo/lb4.jpg')} style={styles.lbimg}/>
                    <Image source={require('./img/lunbo/lb5.jpg')} style={styles.lbimg}/>
                    <Image source={require('./img/lunbo/lb6.jpg')} style={styles.lbimg}/>
                </Swiper>

                <LinearGradient colors={["#ff9c00","white"]} style={styles.delicacy}>

                        <View style={styles.classification}>
                            <TouchableOpacity
                                onPress={()=>this.tomeishiLi()}
                                style={styles.cfStyle}>
                                <Image source={require('./img/cf/cf11.png')} style={styles.cfimg}/>
                                <Text>美食</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>this.tomeishiLi()}
                                style={styles.cfStyle}>
                                <Image source={require('./img/cf/cf22.png')} style={styles.cfimg}/>
                                <Text>下午茶</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>this.tomeishiLi()}
                                style={styles.cfStyle}>
                                <Image source={require('./img/cf/cf33.png')} style={styles.cfimg}/>
                                <Text>汉堡</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>this.tomeishiLi()}
                                style={styles.cfStyle}>
                                <Image source={require('./img/cf/cf44.png')} style={styles.cfimg}/>
                                <Text>烘焙</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>this.tomeishiLi()}
                                style={styles.cfStyle}>
                                <Image source={require('./img/cf/cf55.png')} style={styles.cfimg}/>
                                <Text>水果</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>this.tomeishiLi()}
                                style={styles.cfStyle}>
                                <Image source={require('./img/cf/cf66.png')} style={styles.cfimg}/>
                                <Text>蔬菜</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>this.tomeishiLi()}
                                style={styles.cfStyle}>
                                <Image source={require('./img/cf/cf77.png')} style={styles.cfimg}/>
                                <Text>肉类</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>this.tomeishiLi()}
                                style={styles.cfStyle}>
                                <Image source={require('./img/cf/cf88.png')} style={styles.cfimg}/>
                                <Text>冰淇淋</Text>
                            </TouchableOpacity>
                        </View>

                    <View style={styles.jingxuan}>
                        <View style={styles.jxmaxStyle}>
                            <TouchableOpacity
                                onPress={()=>this.tocommodity1()}
                                style={styles.jxStyle}>
                                <Image source={require('./img/jingxuan/jx1.jpg')} style={styles.jximg}/>
                                <Text style={styles.jxnameStyle}>芝士鲜虾蟹黄寿司</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>this.tocommodity2()}
                                style={styles.jxStyle}>
                                <Image source={require('./img/jingxuan/jx2.jpg')} style={styles.jximg}/>
                                <Text style={styles.jxnameStyle}>泰式蛋糕奶茶</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.jxmaxStyle}>
                            <TouchableOpacity
                                onPress={()=>this.tocommodity1()}
                                style={styles.jxStyle}>
                                <Image source={require('./img/jingxuan/jx3.jpg')} style={styles.jximg}/>
                                <Text style={styles.jxnameStyle}>火腿套餐饭</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>this.tocommodity2()}
                                style={styles.jxStyle}>
                                <Image source={require('./img/jingxuan/jx4.jpg')} style={styles.jximg}/>
                                <Text style={styles.jxnameStyle}>健康沙拉</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.jxmaxStyle}>
                            <TouchableOpacity
                                onPress={()=>this.tocommodity1()}
                                style={styles.jxStyle}>
                                <Image source={require('./img/jingxuan/jx5.jpg')} style={styles.jximg}/>
                                <Text style={styles.jxnameStyle}>鲜虾小葱粥</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>this.tocommodity2()}
                                style={styles.jxStyle}>
                                <Image source={require('./img/jingxuan/jx6.jpg')} style={styles.jximg}/>
                                <Text style={styles.jxnameStyle}>川渝酸辣粉</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
    </ScrollView>
            </View>
        );
    }

    tomeishiLi(){
        this.props.navigation.navigate('meishiLi');
    }
    tocommodity1(){
        this.props.navigation.navigate('commodity1');
    }
    tocommodity2(){
        this.props.navigation.navigate('commodity2');
    }

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',

    },

    lbimg: {
        width:width,
        height:0.35*height
    },


    headerStyle:{
        height:0.07*height,
        backgroundColor:'#ff9c00',
        flexDirection:'row',
        justifyContent:'center',//垂直居中
        alignItems:'center',//左右居中
    },
//搜索框
    searchStyle:{
        width:0.65*width,
        height:0.05*height,
        borderRadius:6,
        backgroundColor:'white',
        flexDirection:'row',
        marginLeft:0.09*width,
        marginRight:0.09*width,
    },
    searchInputStyle:{
        width:0.55*width,
        height:0.055*height,
    },

    swiperStyle:{
        height:0.3*height,
    },
    delicacy:{


    },
    classification:{
        width:0.98*width,
        height:0.2*height,
        backgroundColor: 'white',
        flexDirection:'row',
        flexWrap: 'wrap',
        margin:0.01*width,
        borderRadius:10,
    },
    cfStyle:{
        width:0.245*width,
        height:0.1*height,
        //borderWidth:1,
        //marginLeft:0.03*width,
        //marginRight:0.03*width,
        justifyContent:'center',//垂直居中
        alignItems:'center',//左右居中
        borderRadius:10,
    },
    cfimg:{
        width:0.1*width,
        height:0.1*width,
        borderWidth:1,
    },
    jingxuan:{
        flexDirection:'column',
        flexWrap: 'wrap',
    },
    jxmaxStyle:{
        width:width,
        flexDirection:'row',

    },
    jxStyle:{
        width:0.48*width,
        height:0.4*width,
        marginLeft:0.01*width,
        marginRight:0.01*width,
        //borderWidth:1,
    },

    jximg:{
        width:0.48*width,
        height:0.3*width,
        borderRadius:8,
    },
    jxnameStyle:{
        fontSize:15,
        textAlign:'center'
    }

})