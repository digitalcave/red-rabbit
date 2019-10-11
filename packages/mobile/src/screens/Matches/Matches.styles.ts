import { StyleSheet } from 'react-native'
import { DIMENSION_WIDTH, DIMENSION_HEIGHT, DARK_GRAY, ICON_FONT } from '../../variables'

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { paddingBottom: 10, fontSize: 22, color: DARK_GRAY },
  icon: {
    fontFamily: ICON_FONT,
    fontSize: 20,
    color: DARK_GRAY,
    paddingRight: 10,
  },
  containerMatches: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },
})

export default styles
