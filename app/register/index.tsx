import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'

export default function Resgister() {
  return (
    <View style={{flex:1, justifyContent:'center' , alignItems:"center"}}>
      <Text style={{fontSize:20}}>Resgister</Text>
      <Link href="/login" asChild>
        <Button  title='Login'/>
      </Link>
    </View>
  )
}