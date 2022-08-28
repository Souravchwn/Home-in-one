import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Messagerlist({ item }) {

    const navigation = useNavigation();
    return (
        <View style={{
            backgroundColor: 'white',
            flex: 1,
            paddingHorizontal: 20,
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('MessageOf')}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: '#4D4D4D',
                    padding: 10,
                    marginTop: 20,
                    shadowColor: '#171717',
                    shadowOffset: { width: -2, height: 4 },
                    shadowOpacity: 0.2,
                    shadowRadius: 3,
                    justifyContent: "space-between"
                }}>
                    <View style={{
                        backgroundColor: '#4D4D4D',
                        borderRadius: 32,
                        height: 64,
                        width: 64,
                        marginRight: 20
                    }}></View>

                    <View style={{
                        paddingRight: 80
                    }}>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: "bold"
                        }}>{item.name}</Text>
                        <Text style={{
                            color: '#4D4D4D'
                        }}>{item.phone}</Text>
                        {item.status === 'online' ? <Text style={{
                            backgroundColor: '#46B739',
                            color: 'white',
                            marginTop: 5,
                            fontSize: 9,
                            borderRadius: 10,
                            alignSelf: "center",
                            paddingVertical: 2,
                            paddingHorizontal: 54
                        }}>{item.status}</Text> : <Text style={{
                            backgroundColor: '#808080',
                            color: 'white',
                            marginTop: 5,
                            fontSize: 9,
                            borderRadius: 10,
                            alignSelf: "center",
                            paddingVertical: 2,
                            paddingHorizontal: 54
                        }}>{item.status}</Text>}
                    </View>

                    <View style={{
                        alignSelf: "flex-start",
                    }}>
                        <Text>{item.time}</Text>
                        {item.new === '1' ? <View style={{
                            backgroundColor: '#EAB585',
                            height: 16,
                            width: 16,
                            borderRadius: 8,
                            position: "absolute",
                            marginTop: 40,
                            alignSelf: "center"
                        }}></View> : null}
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}