import React from 'react'
import { ScrollView, Text, TouchableOpacity, ImageBackground, View, FlatList } from 'react-native'
import { Message } from '../../components'
import Icon from 'react-native-vector-icons/Ionicons'
import mock from '../../mock'

import styles from './ChatScreen.styles'

const Chat: React.FC = (props) => (
  <ImageBackground source={require('../../assets/images/bg.png')} style={styles.bg}>
    <View style={styles.containerMessages}>
      <ScrollView>
        <View style={styles.top}>
          <Text style={styles.title}>Messages</Text>
          <TouchableOpacity>
            <Text style={styles.icon}>
              <Icon name="ios-options" size={24} />
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={mock}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Message image={item.image} name={item.name} lastMessage={item.message} />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  </ImageBackground>
)

export default Chat
