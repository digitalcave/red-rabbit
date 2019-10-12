import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Colors, Fonts } from '../../theme'

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: wp(100),
    height: hp(100),
  },
  containerProfile: { marginHorizontal: 0 },
  photo: {
    width: wp(100),
    height: 450,
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topIconLeft: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    color: Colors.white,
    paddingLeft: 20,
    marginTop: -20,
    transform: [{ rotate: '90deg' }],
  },
  topIconRight: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    color: Colors.white,
    paddingRight: 20,
  },
  actionsProfile: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: { fontFamily: Fonts.regular, fontSize: 20, color: Colors.white },
  textButton: {
    fontFamily: Fonts.regular,
    fontSize: 15,
    color: Colors.white,
    paddingLeft: 5,
  },
  circledButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  roundedButton: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 20,
  },
})

export default styles
