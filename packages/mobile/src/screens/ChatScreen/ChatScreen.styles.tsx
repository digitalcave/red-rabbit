import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../theme'

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { paddingBottom: 10, fontSize: 22, color: Colors.darkGray },
  icon: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    color: Colors.darkGray,
    paddingRight: 10,
  },
  containerMessages: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },
})

export default styles
