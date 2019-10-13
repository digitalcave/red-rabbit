import React from 'react'
import { ScrollView, View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { ProfileItem } from '../../components'
import Icon from 'react-native-vector-icons/Ionicons'
import mock from '../../mock'
import styles from './ProfileScreen.styles'

const Profile: React.FC = (props) => {
  const { age, image, info1, info2, info3, info4, location, match, name } = mock[7]

  return (
    <ImageBackground source={require('../../assets/images/bg.png')} style={styles.bg}>
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Text style={styles.topIconLeft}>
                <Icon name="chevronLeft" />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.topIconRight}>
              <Icon name="ios-options" size={24} />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Text style={styles.iconButton}>
              <Icon name="optionsH" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton}>
            <Text style={styles.iconButton}>
              <Icon name="chat" />
            </Text>
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default Profile
