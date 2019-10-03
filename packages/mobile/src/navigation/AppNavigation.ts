import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import DetailScreen from '../screens/Detail'
import HomeScreen from '../screens/Home'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Chapapp',
    },
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      title: 'Detalle',
    },
  },
})

const AppStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Profile: {
      screen: DetailScreen,
    },
  },
  {
    navigationOptions: {},
  },
)

export default createAppContainer(AppStack)
