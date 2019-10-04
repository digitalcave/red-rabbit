import React from 'react'
import styles from './City.styles'

import { Text, TouchableOpacity } from 'react-native'
import Icon from '../Icon/Icon'

const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        <Icon name="marker" /> New York
      </Text>
    </TouchableOpacity>
  )
}

export default City
