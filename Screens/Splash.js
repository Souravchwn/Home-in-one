import React from "react";
import { View, Text, Image } from 'react-native'

export default function Splash() {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
        }}>
            <Image source={require('../Images/onelogo.png')} style={{
                alignSelf: "center"
            }} />
        </View>
    )
}