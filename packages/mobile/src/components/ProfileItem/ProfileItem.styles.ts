import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../theme'

const styles = StyleSheet.create({
  containerProfileItem: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingBottom: 25,
    margin: 20,
    borderRadius: 8,
    marginTop: -65,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { height: 0, width: 0 },
  },
  matchesProfileItem: {
    width: 131,
    marginTop: -15,
    backgroundColor: Colors.primary,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  matchesTextProfileItem: {
    fontFamily: Fonts.regular,
    color: Colors.white,
  },
  name: {
    paddingTop: 25,
    paddingBottom: 5,
    color: Colors.darkGray,
    fontSize: 15,
    textAlign: 'center',
  },
  descriptionProfileItem: {
    color: Colors.gray,
    textAlign: 'center',
    paddingBottom: 20,
    fontSize: 13,
  },
  info: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconProfile: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.darkGray,
    paddingHorizontal: 10,
  },
  infoContent: {
    color: Colors.gray,
    fontSize: 13,
  },
})

export default styles
