import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  containerHome: { marginHorizontal: 10 },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  top: {
    paddingTop: hp(2),
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    marginTop: hp(40),
    marginHorizontal: wp(7),
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
    borderRadius: wp(3),
  },
  centerText: {
    fontSize: 17,
    color: '#fff',
  },
})

export default styles
