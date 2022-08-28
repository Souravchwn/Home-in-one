import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Inbox from "./inbox";
import inboxData from "./Datas/inboxData";
import messageData from "./Datas/messageData";
import Messagerlist from "./messagerlist";

export default function MessageRender({ item, navigation }) {
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
                    }}>Messages</Text>
                </View>
                <View>
                    <Ionicons name="settings-outline" size={29} color="black" />
                </View>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('NotificationMain')}>
                    <View style={{
                        backgroundColor: '#F7FCF5',
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        marginTop: 20,
                        paddingVertical: 10
                    }}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}>
                            <View style={{
                                backgroundColor: '#B5E49A',
                                borderRadius: 16.5,
                                height: 33,
                                width: 33,
                                marginRight: 20
                            }}></View>
                            <Text style={{
                                color: '#B5E49A',
                                fontSize: 32
                            }}>
                                15
                            </Text>
                        </View>
                        <Text>
                            Notification
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <View style={{
                            backgroundColor: '#F7FCF5',
                            paddingHorizontal: 20,
                            borderRadius: 10,
                            marginTop: 20,
                            paddingVertical: 10
                        }}>
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <View style={{
                                    backgroundColor: '#EAB585',
                                    borderRadius: 16.5,
                                    height: 33,
                                    width: 33,
                                    marginRight: 20
                                }}></View>
                                <Text style={{
                                    color: '#EAB585',
                                    fontSize: 32
                                }}>
                                    23
                                </Text>
                            </View>
                            <Text>
                                Messages
                            </Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                data={messageData}
                renderItem={({ item }) => <Messagerlist item={item} />}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}