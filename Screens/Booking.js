import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import BookingRender from "./BookingRender";
import BookingData from "./Datas/BookingData";

export default function Booking({ navigation }) {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: 'white'
        }}><View style={{
            flexDirection: "row",
            paddingTop: 30,
            justifyContent: "space-between",
            alignItems: "center",
        }}>
                <View style={{
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Image source={require('../Images/logger.png')} style={{
                        height: 40,
                        width: 40,
                        borderRadius: 90
                    }} />
                    <Text>Hello, Maria</Text>
                </View>
                <View style={{
                    paddingRight: 30
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        alignSelf: "center"
                    }}>Booking</Text>
                </View>
                <View>
                    <Ionicons name="settings-outline" size={29} color="black" />
                </View>
            </View>
            <FlatList
                data={BookingData}
                renderItem={({ item }) => <BookingRender item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}