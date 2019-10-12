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
  center: {
    marginTop: '50%',
    marginHorizontal: '5%',
    padding: '3%',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
    borderRadius: 10,
  },
  centerText: {
    fontSize: 17,
    color: '#fff',
  },
})

export default styles
