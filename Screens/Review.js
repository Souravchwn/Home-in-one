import React from "react";
import { View, Image, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Review({ item }) {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: 'white'
        }}>
            <View style={{
                paddingTop: 30
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold"
                    }}>
                        {item.title}
                    </Text>
                    <Image source={require('../Images/Costomized.png')} />
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name="star" size={20} color="black" style={{ paddingRight: 2 }} />
                        <Ionicons name="star" size={20} color="black" style={{ paddingRight: 2 }} />
                        <Ionicons name="star" size={20} color="black" style={{ paddingRight: 2 }} />
                        <Ionicons name="star" size={20} color="black" style={{ paddingRight: 2 }} />
                    </View>
                </View>
            </View>
            <View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "flex-start"
                }}>
                    <MaterialCommunityIcons name="checkbox-blank-circle" size={14} color="#EE5A30" style={{
                        marginTop: 5
                    }} />
                    <View>
                        <Text style={{
                            fontSize: 14,
                            paddingLeft: 8,
                            color: '#4a4b4d'
                        }}>{item.description}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}