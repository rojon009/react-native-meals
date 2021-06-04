import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../Home/Home';
import FoodDetail from '../FoodDetail/FoodDetail';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Food Mania',
            headerStyle: {
                backgroundColor : 'orange'
            }
        }
    },
    FoodDetail: {
        screen: FoodDetail,
        navigationOptions: {
            title: 'Food Detail',
            headerStyle: {
                backgroundColor : 'orange'
            }
        }
    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);