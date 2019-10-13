import React from 'react'
import styles from './City.styles'

import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const City: React.FC = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        <Icon name="map-marker-alt" size={15} /> New York
      </Text>
    </TouchableOpacity>
  )
}

export default City
