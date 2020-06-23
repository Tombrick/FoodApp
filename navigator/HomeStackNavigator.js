/**
 * Created by 狗谭 on 2020/6/5.
 */
import {createStackNavigator} from 'react-navigation-stack'

import mtHome from '../mtHome';

const HomeRootStack = createStackNavigator({
    Home:mtHome,

},{
    initialRouteName:'Home'
});
export default HomeRootStack;