import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, ImageBackground, View, FlatList } from 'react-native'
import { LoginManager, AccessToken } from 'react-native-fbsdk'
import { firebase } from '@react-native-firebase/auth'

const LoginScreen: React.FC = () => {
  const [user, setUser] = useState({})

  const doSignin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])
      if (result.isCancelled) {
        throw new Error('User cancelled the login process')
      }

      const data = await AccessToken.getCurrentAccessToken()
      if (!data) {
        throw new Error('Something went wrong obtaining access token')
      }

      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
      const user = await firebase.auth().signInWithCredential(credential)
      setUser(user)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <View style={{ padding: 30 }}>
      <TouchableOpacity onPress={doSignin}>
        <Text style={{ padding: 20, backgroundColor: 'blue', color: 'white' }}>Login con Facebook</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </View>
  )
}

export default LoginScreen
