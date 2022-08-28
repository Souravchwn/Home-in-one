import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import BookingRender from "./BookingRender";
import BookingData from "./Datas/BookingData";

export default function BookingTemplate({ navigation }) {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: 'white'
        }}>
            <FlatList
                data={BookingData}
                renderItem={({ item }) => <BookingRender item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}