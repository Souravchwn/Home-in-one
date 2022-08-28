import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './Registration'
import Splash from './Splash';
import Dashboard from './Dashboard';
import DashboardNavigator from '../NavigationContainer/DashboardNavigator';
import Booking from './Booking';

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name='Dashboard'
                component={DashboardNavigator}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Booking'
                component={Booking}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>

    );
}