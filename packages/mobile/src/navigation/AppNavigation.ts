import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Explore, Matches, Chat, Profile } from '../screens'

const AppStack = createMaterialBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
    },
    Matches: {
      screen: Matches,
    },
    Chat: {
      screen: Chat,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    navigationOptions: {},
  },
)

export default createAppContainer(AppStack)
