import React from 'react'
import { gql } from 'apollo-boost'
import { View, Image } from 'react-native'
import { TouchableRipple, ActivityIndicator } from 'react-native-paper'
import { NavigationStackProp } from 'react-navigation-stack'

import styles from './styles'
import { useFetch } from '../../utils/hooks'

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
  // const { data, loading, error } = useQuery(PRODUCTS)

  return (
    <View>
      <TouchableRipple onPress={() => navigation.navigate('Detail')} rippleColor="rgba(0, 0, 0, .32)">
        <View style={styles.button}>
          <Image style={styles.image} source={{ uri: 'https://picsum.photos/600/800' }} />
        </View>
      </TouchableRipple>
    </View>
  )
}

export default HomeScreen
