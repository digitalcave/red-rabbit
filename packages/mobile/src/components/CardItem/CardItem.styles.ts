import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../theme'

export default StyleSheet.create({
  containerCardItem: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { height: 0, width: 0 },
  },
  matchesCardItem: {
    marginTop: -35,
    backgroundColor: Colors.primary,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  matchesTextCardItem: {
    fontFamily: Fonts.regular,
    color: Colors.white,
  },
  descriptionCardItem: {
    color: Colors.gray,
    textAlign: 'center',
  },
  status: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: Colors.gray,
    fontSize: 12,
  },
  online: {
    width: 6,
    height: 6,
    backgroundColor: Colors.onlineStatus,
    borderRadius: 3,
    marginRight: 4,
  },
  offline: {
    width: 6,
    height: 6,
    backgroundColor: Colors.offlineStatus,
    borderRadius: 3,
    marginRight: 4,
  },
  actionsCardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 30,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.white,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: Colors.darkGray,
    shadowOffset: { height: 10, width: 0 },
  },
  miniButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: Colors.white,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: Colors.darkGray,
    shadowOffset: { height: 10, width: 0 },
  },
  star: {
    fontFamily: Fonts.regular,
    color: Colors.starAction,
  },
  like: {
    fontSize: 25,
    fontFamily: Fonts.regular,
    color: Colors.likeAction,
  },
  dislike: {
    fontSize: 25,
    fontFamily: Fonts.regular,
    color: Colors.dislikeAction,
  },
  flash: {
    fontFamily: Fonts.regular,
    color: Colors.flashAction,
  },
})
