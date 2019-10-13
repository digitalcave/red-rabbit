import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native'
import mock from '../../mock'
import { CardItem } from '../../components'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './MatchesScreen.styles'

const Matches: React.FC = (props) => (
  <ImageBackground source={require('../../assets/images/bg.png')} style={styles.bg}>
    <View style={styles.containerMatches}>
      <ScrollView>
        <View style={styles.top}>
          <Text style={styles.title}>Matches</Text>
          <TouchableOpacity>
            <Text style={styles.icon}>
              <Icon name="ios-options" size={24} />
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          numColumns={2}
          data={mock}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <CardItem image={item.image} name={item.name} status={item.status} variant />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  </ImageBackground>
)

export default Matches
