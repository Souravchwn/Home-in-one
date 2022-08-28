import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ReviewData from "./Datas/ReviewData";
import Review from "./Review";

export default function ReviewRender() {
    return (
        <View style={{
            paddingHorizontal: 20,
            flex: 1,
            backgroundColor: 'white'
        }}>
            <View style={{
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
                    }}>Reviews</Text>
                </View>
                <View>
                    <Ionicons name="settings-outline" size={29} color="black" />
                </View>
            </View>
            <FlatList
                data={ReviewData}
                renderItem={({ item }) => <Review item={item} />}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}