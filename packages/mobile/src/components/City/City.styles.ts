import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../theme'

export default StyleSheet.create({
  city: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { height: 0, width: 0 },
  },
  cityText: {
    fontFamily: Fonts.regular,
    color: Colors.darkGray,
    fontSize: 13,
  },
})
