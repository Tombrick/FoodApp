/**
 * Created by 狗谭 on 2020/6/14.
 */
import React from 'react';

import {Image,TextInput,TouchableOpacity, ScrollView, FlatList,StyleSheet, Text, View,Dimensions} from 'react-native';

import StringDistinction from './SearchKeywordsChangeColor';
const { width,height } = Dimensions.get('window');
export default class Retrieval extends React.Component{
    constructor(props){
        super(props)
        this.state={
            color:false,
            ReData:[
                {
                    shop:require('./img/order/shop/shop1.jpg'),
                    id:require('./img/order/order01.jpg'),
                    type:1,
                    content:'无刺水煮鱼',
                    title:'味道招牌水煮鱼',
                    price:18.88,
                    time:'2020.05.05',
                },

                {
                    shop:require('./img/order/shop/shop2.jpg'),
                    id:require('./img/order/order02.jpg'),
                    type:2,
                    content:'鲜虾粥',
                    title:'养生粥铺',
                    price:15.3,
                    time:'2020.05.01',

                },

                {
                    shop:require('./img/order/shop/shop3.jpg'),
                    id:require('./img/order/order03.jpg'),
                    type:3,
                    content:'黄焖鸡米饭',
                    title:'杨明宇黄焖鸡米饭（丽水店）',
                    price:16.9,
                    time:'2020.04.26',

                },
                {
                    shop:require('./img/order/shop/shop4.jpg'),
                    id:require('./img/order/order04.jpg'),
                    type:4,
                    content:'酸辣五谷鱼粉',
                    title:'五谷鱼粉（丽水店）',
                    price:14.3,
                    time:'2020.04.17',

                },
                {
                    shop:require('./img/order/shop/shop5.jpg'),
                    id:require('./img/order/order05.jpg'),
                    type:5,
                    content:'糖醋里脊套餐饭',
                    title:'家常美食小炒',
                    price:24.88,
                    time:'2020.04.11',
                },
                {
                    shop:require('./img/order/shop/shop6.jpg'),
                    id:require('./img/order/order06.jpg'),
                    type:6,
                    content:'海鲜麻辣香锅套餐',
                    title:'川渝麻辣香锅',
                    price:19.22,
                    time:'2020.03.08',
                },
                {
                    shop:require('./img/order/shop/shop7.jpg'),
                    id:require('./img/order/order07.jpg'),
                    type:7,
                    content:'黑椒牛排意面',
                    title:'轻食意面',
                    price:13.98,
                    time:'2020.02.18',
                },
            ],

            dataLis:[
                {
                    shop:require('./img/order/shop/shop1.jpg'),
                    id:require('./img/order/order01.jpg'),
                    type:1,
                    content:'无刺水煮鱼',
                    title:'味道招牌水煮鱼',
                    price:18.88,
                    time:'2020.05.05',
                },

                {
                    shop:require('./img/order/shop/shop2.jpg'),
                    id:require('./img/order/order02.jpg'),
                    type:2,
                    content:'鲜虾粥',
                    title:'养生粥铺',
                    price:15.3,
                    time:'2020.05.01',

                },

                {
                    shop:require('./img/order/shop/shop3.jpg'),
                    id:require('./img/order/order03.jpg'),
                    type:3,
                    content:'黄焖鸡米饭',
                    title:'杨明宇黄焖鸡米饭(丽水店)',
                    price:16.9,
                    time:'2020.04.26',

                },
                {
                    shop:require('./img/order/shop/shop4.jpg'),
                    id:require('./img/order/order04.jpg'),
                    type:4,
                    content:'酸辣五谷鱼粉',
                    title:'五谷鱼粉(丽水店)',
                    price:14.3,
                    time:'2020.04.17',

                },
                {
                    shop:require('./img/order/shop/shop5.jpg'),
                    id:require('./img/order/order05.jpg'),
                    type:5,
                    content:'糖醋里脊套餐饭',
                    title:'家常美食小炒',
                    price:24.88,
                    time:'2020.04.11',

                },
                {
                    shop:require('./img/order/shop/shop6.jpg'),
                    id:require('./img/order/order06.jpg'),
                    type:6,
                    content:'海鲜麻辣香锅套餐',
                    title:'川渝麻辣香锅',
                    price:19.22,
                    time:'2020.03.08',
                },
                {
                    shop:require('./img/order/shop/shop7.jpg'),
                    id:require('./img/order/order07.jpg'),
                    type:7,
                    content:'黑椒牛排意面',
                    title:'轻食意面',
                    price:13.98,
                    time:'2020.02.18',
                },
            ],
            replaceText:''
        }
    }




    onChanegeTextKeyword(text){
        var reg = new RegExp(text,"i");
        if(!text){
            this.setState({
                color:false,
                dataLis:this.state.ReData,
                replaceText:''
            });
            return;
        }
        else if(text){
            let newData = [];
            for (var i = 0; i < this.state.ReData.length; i++) {
                let ds = this.state.ReData[i];
                if(ds.title && ds.title.indexOf(text)!=-1){
                    newData.push(ds);
                }
            }

            this.setState({
                color:true,
                dataLis:newData,
                replaceText:text
            });
            return;
        }
    }
    render(){
        return(<View style={{width:'100%',height:'100%'}}>
            <View style={{width:'100%',justifyContent:"center",alignItems:'center',backgroundColor:'white',height:60}}>
                <View style={{backgroundColor:'#eee',width:'97%',flexDirection:'row',borderRadius:20,alignItems:'center',height:40}}>

                    <Image source={require('./img/sousuo.png')} style={{width:20,height:20,marginLeft:8}}/>
                    <TextInput underlineColorAndroid={'transparent'}
                               multiline={true} autoFocus={false} onChangeText={(e)=>this.onChanegeTextKeyword(e)}
                               style={{marginLeft:5,fontSize:13, color: '#363434',overflow:'hidden',width:'98%',height:'100%',padding:0}}
                               placeholder="输入订单关键字"/>
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator = {false}
                keyExtractor={(item,index)=>index.toString()}
                style={{height:'100%',backgroundColor:'#EEEEEE'}}
                data={this.state.dataLis}
                renderItem={({item,index})=>{
return(
<View style={{flexDirection:'row',marginTop:8,backgroundColor:'white',width:"100%",height:0.2*height}}>

<View style={{width:width,flexDirection:'row',flexWrap:'wrap',}}>
    <View>
        <StringDistinction
        delimiter={this.state.item}

        />
    </View>
    <Image source={item.id}
    style={{width:0.15*height,height:0.15*height,borderRadius:10,margin:0.025*height}}
    />
    <View style={{flexDirection:'column',marginTop:5,width:0.6*width}}>
        <View style={{flexDirection:'row',backgroundColor:'#FFDEAD',borderRadius:10,marginTop:10}}>
            <Image source={item.shop}
            style={{width:0.05*height,height:0.05*height,borderRadius:0.025*height,marginLeft:5}}/>
            <Text
            style={{fontSize:15,color:'black',height:0.05*height,lineHeight:0.05*height,marginLeft:10}}>
            {item.title}</Text>
        </View>

        <Text style={{fontSize:13,color:'black',marginLeft:10,marginTop:10,height:0.05*height,}}>{item.content}</Text>
        <View style={{position:'relative',flexDirection:'row'}}>
            <Text style={{marginLeft:10,color:'gray',fontSize:12}}>下单时间：{item.time}</Text>
            <Text style={{fontSize:18,color:'#ff9c00',textAlign:'right',fontWeight: 'bold',position:'absolute',right:0,bottom:0}}>￥{item.price}</Text>
        </View>
    </View>

</View>
</View>
)
}}/>
        </View>)
    }
}

