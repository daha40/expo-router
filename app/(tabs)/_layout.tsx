import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name='one' options={{
        tabBarLabel:'One',
        headerTitle:'One'
      }} />
      <Tabs.Screen name='click' options={{
        tabBarLabel:'Click',
        headerTitle:'Click'
      }} />
      <Tabs.Screen name='posts' options={{
        headerShown:false
      }} />
    </Tabs>
  )
}