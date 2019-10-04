import { StyleSheet } from 'react-native'
import { WHITE, BLACK, ICON_FONT, DARK_GRAY } from '../../variables'

export default StyleSheet.create({
  city: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 90,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  cityText: {
    fontFamily: ICON_FONT,
    color: DARK_GRAY,
    fontSize: 13,
  },
})
