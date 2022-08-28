import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Inbox({ item }) {
    return (
        <View style={{
            paddingHorizontal: 20,
            flex: 1,
            backgroundColor: 'white'
        }}>

            <View style={{ paddingTop: 20 }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <MaterialCommunityIcons name="checkbox-blank-circle" size={14} color="#EE5A30" />
                        <View>
                            <Text style={{
                                fontSize: 14,
                                paddingLeft: 8,
                                color: '#4a4b4d'
                            }}>{item.title}</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={{
                                color: '#b6b7b7',
                                fontSize: 13
                            }}>{item.date}</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "space-between"
                }}>
                    <Text style={{
                        color: '#b6b7b7',
                        marginLeft: 24
                    }}>{item.description}</Text>
                    <AntDesign name="staro" size={14} color="#EE5A30" />
                </View>
            </View>

        </View>
    )
}