import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function posts() {
  return (
    <View style={{ flex:1  , justifyContent:'center' , alignItems:'center'}}>
      <Link style={{fontSize:20}}  href='/posts/1'>open post one</Link>
      <Link style={{fontSize:20}} href='/posts/2'>open post two</Link>
      <Link style={{fontSize:20}} href='/posts/3'>open post there</Link>
    </View>
  )
}