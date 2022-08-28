import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Request({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 20
        }}>
            <View style={{
                alignSelf: "center",
                paddingTop: 50
            }}>
                <Image source={require('../Images/image-removebg-preview.png')} style={{
                    height: 300,
                    width: 300
                }} />
            </View>
            <Text style={{
                fontSize: 26,
                fontWeight: "bold",
                alignSelf: "center",
                marginTop: 30
            }}>
                Your service request
            </Text>
            <Text style={{
                fontSize: 17,
                alignSelf: "center",
                marginTop: 17,
                fontWeight: 'bold'
            }}>
                is being processed.
            </Text>
            <Text style={{
                fontSize: 14,
                alignSelf: "center",
                marginTop: 17,
                textAlign: "center"
            }}>
                Your services are now being processed. We will let you know once the vendor has accepted your request.
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
                <View style={{
                    backgroundColor: '#FEE590',
                    borderRadius: 10,
                    marginTop: 69
                }}>
                    <Text style={{
                        alignSelf: "center",
                        padding: 15
                    }}>View My Bookings</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}