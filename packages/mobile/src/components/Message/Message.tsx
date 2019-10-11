import React from 'react'
import styles from './Message.styles'

import { Text, View, Image } from 'react-native'

const Message: React.FC<$FixMe> = ({ image, lastMessage, name }) => {
  return (
    <View style={styles.containerMessage}>
      <Image source={image} style={styles.avatar} />
      <View>
        <Text>{name}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View>
    </View>
  )
}

export default Message
