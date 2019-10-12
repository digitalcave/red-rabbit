import React from 'react'
import { gql } from 'apollo-boost'
import { View, ImageBackground } from 'react-native'
import CardStack, { Card } from 'react-native-card-stack-swiper'
import { NavigationStackProp } from 'react-navigation-stack'

import styles from './ExploreScreen.styles'
import { City, CardItem } from '../../components'
import mock from '../../mock'

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
// https://picsum.photos/600/800
const Explore: React.FC<Props> = ({ navigation }) => {
  // const { data, loading, error } = useQuery(PRODUCTS)
  let swiper: $FixMe = React.createRef()
  return (
    <ImageBackground source={{ uri: 'https://picsum.photos/600/800' }} style={styles.bg}>
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
        </View>

        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={(swiper_: $FixMe) => (swiper = swiper_)}
        >
          {mock.map((item: $FixMe, index: $FixMe) => (
            <Card key={index}>
              <CardItem
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                actions
                onPressLeft={() => swiper.swipeLeft()}
                onPressRight={() => swiper.swipeRight()}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  )
}

export default Explore
