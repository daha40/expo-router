import { View, Text,Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function click() {
  const router = useRouter()
  return (
    <View style={{ flex:1  , justifyContent:'center' , alignItems:'center'}}>
      <Text style={{ fontSize:20}}>Testing Tabs by abderahmane kateb</Text>
      <Button title='go back' onPress={() => router.back()} />
    </View>
  )
}