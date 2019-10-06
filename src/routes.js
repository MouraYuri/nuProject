import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './screens/mainScreen';


const Routes = createAppContainer(
    createStackNavigator({
        MainScreenPage: {
            screen: MainScreen,
            navigationOptions: ({navigation}) => ({
                header: null,
            })
        }
    })
)

export default Routes;