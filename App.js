import { StyleSheet, Text, View, DeviceEventEmitter, NativeModules, AlertIOS } from 'react-native'
import React, { useState, useEffect } from 'react'
import FingerprintScanner from 'react-native-fingerprint-scanner'

const App = () => {

  const [isAuth, set_isAuth] = useState(false)

  useEffect(() => {
handleFingerPrint();

  }, [])

  const handleFingerPrint = () => {
    FingerprintScanner.isSensorAvailable().then(() => {
      FingerprintScanner
        .authenticate({ description: 'Scan your fingerprint on the device scanner to continue' })
        .then(() => {
          alert('Authenticated successfully');
          set_isAuth(true)
        })
        .catch((error) => {
          alert(error.message);
        });
    }).catch((error) => {
      alert(error)
    })

  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
      {
        isAuth ?
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Finger Scan successfully... </Text>
          :
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Please scan your finger... </Text>
      }
    </View>
  )
}

export default App

const styles = StyleSheet.create({})