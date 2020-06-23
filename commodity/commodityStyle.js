/**
 * Created by 狗谭 on 2020/6/22.
 */
import { StyleSheet, Dimensions } from 'react-native';

const { width,height } = Dimensions.get('window');
let Cstyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F5DEB3',

    },
    physicalFigure:{
        width:width,
        height:width
    },
    commodityInformation:{
        marginTop:-width,

    },
    blockStyle:{
        width:0.94*width,
        height:0.9*width,

    },

    information:{
        width:0.94*width,
        backgroundColor:'white',
        elevation: 10,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'black',  //  阴影颜色
        shadowOffset: { width:20, height: 20 },  // 阴影偏移
        shadowOpacity: 1,  // 阴影不透明度
        shadowRadius: 10,
        marginBottom:10,
        borderRadius:10,
        marginLeft:0.03*width,
    },
    nameStyle:{
        fontSize:20,
        marginLeft:15,
        marginTop:10
    },
    salesStyle:{
        marginLeft:15,
        marginTop:10,
        color:'gray',
        fontSize:12
    },
    shousiPrice:{
        marginLeft:15,
        flexDirection:'row',
        marginTop:10,
        marginBottom:15,
        height:40,
        position:'relative',

    },
    price1:{
        fontSize:25,
        bottom:0,
        position:'absolute',
        color:'#ff9c00'
    },
    price2:{
        fontSize:15,
        left:100,
        bottom:0,
        color:'gray',
        textDecorationLine:'line-through',
        position:'absolute'
    },
    discount:{
        width:40,
        textAlign:'center',
        fontSize:12,
        left:140,
        bottom:0,
        position:'absolute',
        borderRadius:5,
        borderWidth:1,
        color:'#ff9c00',
        borderColor:'#ff9c00'

    },
    introduceStyle:{
        marginLeft:15,
        marginTop:10,
        fontSize:18,
    },
    introduce1:{
        marginLeft:15,
        marginTop:10,
        height:0.7*height,
        fontSize:12,
        color:'gray',
    }



});
export { Cstyle as default };