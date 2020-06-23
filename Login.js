/*登录页面*/

import React,{Component} from 'react';
import{AppRegistry,
	StyleSheet,
	Text,
	View,
	Dimensions,
	TextInput,
	Image,
	Button
}
	from 'react-native';

//import Button from 'react-native-button';

var { width, height } = Dimensions.get('window');

let widthOfMargin = Dimensions.get('window').width*0.05;
export default class LearnRN extends Component{
	constructor(props, context) {
		super(props, context);
	}
	enterMianTabNavigator() {
		this.props.navigation.navigate('Detail');
	}
	enterRegist(){
		this.props.navigation.navigate('Regist');
	}
	static navigationOptions = {
		header: null,
	};




	render(){

		return(
			<View style={styles.container}>
	<View style={{height:200,alignItems: 'center'}}>
	<Image
		style={{width:100,height:100,marginTop:80,borderRadius:50,}}
		source={require('./img/user-profile.jpg')}
	/>
	</View>

		<View style={styles.InputStyle}>
	<TextInput
		style={styles.textInputStyle}
		placeholder={' 手机号'}
			/>
			<View style={{backgroundColor: '#6E8B3D',height:1}}></View>
		<TextInput style={styles.textInputStyle} placeholder={' 密码'} secureTextEntry={true}/>

			</View>

			<View style={{margin:0.05*width,marginBottom:5}}>
	<Button
		title="登录"
		color="#ff9c00"
		onPress={() => this.enterMianTabNavigator()}
	>

	</Button>
		</View>

		<View style={{marginLeft:0.05*width,marginRight:0.05*width,}}>

	<Button
		title="用户注册"

		onPress={() => this.enterRegist()}
	>

	</Button>
		</View>

				<View style={styles.circularL}></View>
				<View style={styles.circularR}></View>
				<Image
					style={{width:0.3*width,height:0.12*width,position:'absolute',top:0.8*height,marginLeft:0.35*width}}
					source={require('./img/appname.png')}
				/>
		</View>

	);
	}
}




let styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#FFDEAD',
		position:'relative'
	},
	InputStyle:{
		width:0.9*width,
		borderRadius:15,
		/*borderWidth:1,
		 borderColor:'red',*/
		marginLeft:0.05*width,
		backgroundColor: 'white',
	},
	textInputStyle:{
		width:0.8*width,
		marginLeft:0.05*width,
	},
	circularL:{
		width:0.7*height,
		height:0.7*height,
		borderRadius:0.35*height,
		backgroundColor:'#ffcc99',
		position:'absolute',
		top:0.75*height,
		left:-0.35*height,
	},
	circularR:{
		width:0.7*height,
		height:0.7*height,
		borderRadius:0.35*height,
		backgroundColor:'#ffcc99',
		position:'absolute',
		top:0.75*height,
		right:-0.35*height,
	},




});
AppRegistry.registerComponent('LearnRN',() => LearnRN);
