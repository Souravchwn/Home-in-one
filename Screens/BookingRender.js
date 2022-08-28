import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function BookingRender({ item }) {

    const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: 'white'
        }}>
            <TouchableOpacity key={item.id} onPress={() => navigation.navigate('BookingMain', {
                item: item
            })}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 20
                    }}>
                        <View>
                            <Image source={item.image} />
                        </View>
                        <View style={{
                            paddingLeft: 20
                        }}>
                            <View>
                                <Text style={{
                                    fontWeight: "bold",
                                    fontSize: 15
                                }}>{item.name}</Text>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                paddingVertical: 2
                            }}>
                                <MaterialIcons name="watch-later" size={24} color="black" style={{
                                    paddingRight: 10
                                }} />
                                <Text style={{
                                    color: '#F9A677'
                                }}>{item.time}</Text>
                            </View>

                            <View>
                                <Text style={{
                                    color: '#288f2b'
                                }}>{item.date}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontSize: 20
                        }}>{item.bugget}</Text>
                        <MaterialIcons name="forward-to-inbox" size={24} color="black" />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}