import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../assets/Colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.dark.text,
        tabBarStyle: {
            backgroundColor: Colors.SECONDARY,
            paddingBottom: 14,
            height: 70,
        },
        tabBarLabelStyle: {
            fontSize: 12,
             fontWeight: 'bold',
            } 
         }}>
        <Tabs.Screen name='home' options={{ title:"home", tabBarIcon: ({ focused }) => <FontAwesome name="home" size={24} color={focused ? Colors.PRIMARY : Colors.dark.text} /> }}/>
        <Tabs.Screen name='history' options={{ title:"History", tabBarIcon: ({focused}) => <Ionicons name="time-outline" size={24} color={focused ? Colors.PRIMARY : Colors.dark.text} /> }} />
        <Tabs.Screen name='profile' options={{ title:"Profile", tabBarIcon: ({ focused }) => <Ionicons name="person-sharp" size={24} color={focused ? Colors.PRIMARY : Colors.dark.text} /> }} />
    </Tabs>
  )
}

export default TabLayout