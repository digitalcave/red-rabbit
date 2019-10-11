import { StyleSheet } from 'react-native'

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
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export default styles
