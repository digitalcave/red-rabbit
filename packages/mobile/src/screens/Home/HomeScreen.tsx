import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { View, Text } from 'react-native'
import { TouchableRipple, Surface } from 'react-native-paper'
import { NavigationStackProp } from 'react-navigation-stack'

import styles from './styles'

interface Props {
  navigation: NavigationStackProp<{ userId: string }>
}

const PRODUCTS = gql`
  {
    products {
      id
      title
    }
  }
`

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { data, loading, error } = useQuery(PRODUCTS)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Surface style={styles.card}>
        <TouchableRipple onPress={() => navigation.navigate('Detail')} rippleColor="rgba(0, 0, 0, .32)">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Detail</Text>
          </View>
        </TouchableRipple>
      </Surface>
    </View>
  )
}

export default HomeScreen
