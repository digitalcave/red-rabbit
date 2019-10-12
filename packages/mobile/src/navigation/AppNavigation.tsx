import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Explore, Matches, Chat, Profile } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'

const ExploreIcon: React.FC<{ tintColor?: string }> = ({ tintColor }) => (
  <Icon name="ios-home" color={tintColor} size={24} />
)
const MatchesIcon: React.FC<{ tintColor?: string }> = ({ tintColor }) => (
  <Icon name="ios-heart" color={tintColor} size={24} />
)
const ChatIcon: React.FC<{ tintColor?: string }> = ({ tintColor }) => (
  <Icon name="ios-chatbubbles" color={tintColor} size={24} />
)
const ProfileIcon: React.FC<{ tintColor?: string }> = ({ tintColor }) => (
  <Icon name="ios-person" color={tintColor} size={24} />
)
const AppStack = createMaterialBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarIcon: ExploreIcon,
      },
    },
    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarIcon: MatchesIcon,
      },
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarIcon: ChatIcon,
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ProfileIcon,
      },
    },
  },
  {
    navigationOptions: {},
  },
)

export default createAppContainer(AppStack)
