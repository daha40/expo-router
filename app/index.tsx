import { View, Text ,Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function Home() {
  return (
    <View style={{flex:1 , justifyContent:"center" , alignItems:"center"}}>
      <StatusBar style='light' />
      <Text>Home page</Text>
      <Link href="/register/" asChild>
        <Button title='Open Reg Page'/>
      </Link>
      <Link href="/one" asChild>
        <Button title='Open TABs'/>
      </Link>
    </View>
  )
}