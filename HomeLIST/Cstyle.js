/**
 * Created by 狗谭 on 2020/6/21.
 */
import { StyleSheet, Dimensions } from 'react-native';

const { width,height } = Dimensions.get('window');
let Cstyle = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
       //alignItems: 'center',
        backgroundColor: '#F5DEB3',
        //borderWidth:1
    },
    FlatListStyle:{
        width:width,

    },
    merchandise:{
        backgroundColor:'white',
        borderRadius:10,
        left:0.03*width,
        height:0.2*height,
        marginTop:10,
        flexDirection:'column',
        width:0.94*width,
        elevation: 5,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'black',  //  阴影颜色
        shadowOffset: { width:10, height: 10 },  // 阴影偏移
        shadowOpacity: 1,  // 阴影不透明度
        shadowRadius: 10,
    },
    merchandiseTop:{
        width:0.94*width,
        flexDirection:'row',
        marginTop:0.02*height,
    },
    shopLogo:{
        width:0.12*height,
        height:0.12*height,

        //marginTop:0.02*height,
        marginLeft:0.02*height,
        position:'relative',
    },
    gradeLogo:{
        width:0.05*height,
        height:0.05*height,
        top:-5,
        left:-5,
        zIndex:10,
        position:'absolute'
    },
    shopLogoss:{
        width:0.12*height,
        height:0.12*height,
        top:0,
        zIndex:1,
        position:'absolute',
        borderRadius:5,
    },
    information:{
        width:0.6*width,
        marginLeft:0.01*height,
    },
    titleText:{
        //height:0.059*height,
        fontSize:18,
    },
    salesData:{
        flexDirection:'row',
        height:25
    },
    distributionStyle:{
        flexDirection:'row',
    },
    score:{
        color:'#ff9c00',
        fontSize:18,
        marginRight:10
    },
    salesnumber:{
        color:'gray',
        height:25,
        lineHeight:25
    },

    peice:{
        fontSize:12,
        color:'gray',
        marginRight:10
    },
    merchandiseBottom:{
        marginLeft:0.02*height,
        height:20,
        flexDirection:'row',
        marginTop:5
    },
    discountStyle:{
        borderWidth:1,
        borderRadius:5,
        borderColor:'#ff9c00',
        fontSize:12,
        width:50,
        marginRight:10,
        textAlign:'center',
        height:20,
        lineHeight:20
    },
    couponStyle:{
        fontSize:12,
        textAlign:'center',
        backgroundColor:'#ff9c00',
        borderRadius:5,
        height:20,
        lineHeight:20,
        color:'white'
    },
    dianTouchable:{
        width:0.05*width,
        height:0.05*width,
        marginLeft:5,
        alignItems: 'center',
    },
    dian:{
        width:0.01*width,
        height:0.036*width
    }

});
export { Cstyle as default };