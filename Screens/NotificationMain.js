import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Inbox from "./inbox";
import inboxData from "./Datas/inboxData";
import messageData from "./Datas/messageData";
import Messagerlist from "./messagerlist";
import { FontAwesome } from '@expo/vector-icons';
import Calendar from "./Calender";
import Booking from "./Booking";
import BookingTemplate from "./BookingTemplate";
import listData from "./Datas/listData";

const Lister = ({ item }) => {
    return (

        <View style={{
            marginTop: 20,
        }}>
            <View style={{ marginRight: 30 }}>
                <Image source={item.image} style={{
                    position: "absolute"
                }} />

                <Image source={require('../Images/pexels-photo-41.png')} style={{
                    position: "absolute"
                }} />
                <View style={{
                    backgroundColor: 'white',
                    height: 2,
                    width: 200,
                    position: "absolute",
                    marginTop: 190
                }}></View>
                <Text style={{
                    fontWeight: "bold",
                    color: 'white',
                    marginTop: 190,
                    fontSize: 13,
                    paddingTop: 6,
                    alignSelf: "center"
                }}>{item.title}</Text>
                <View style={{
                    flexDirection: "row",
                    marginTop: 20
                }}>
                    <FontAwesome name="star" size={24} color="black" />
                    <FontAwesome name="star" size={24} color="black" />
                    <FontAwesome name="star" size={24} color="black" />
                    <FontAwesome name="star" size={24} color="black" />
                </View>
                <Text style={{
                    paddingTop: 7,
                    color: '#f7803c'
                }}>{item.rating}</Text>
                <Text>
                    Average rating
                </Text>
            </View>
        </View>
    )
}

export default function NotificationMain({ navigation }) {
    return (
        <>
            <ScrollView style={{
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
                        }}>Notification</Text>
                    </View>
                    <View>
                        <Ionicons name="settings-outline" size={29} color="black" />
                    </View>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <TouchableOpacity>
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
                <View>
                    <Text style={{
                        color: '#519548',
                        paddingTop: 20
                    }}>
                        Upcoming Services
                    </Text>
                    <Text style={{
                        color: 'black',
                        paddingTop: 10,
                        fontWeight: "bold",
                        fontSize: 36
                    }}>
                        Home Cleaning
                    </Text>
                    <Text style={{
                        color: 'black',
                        paddingTop: 10,
                        fontSize: 20
                    }}>
                        Next Service Date
                    </Text>
                </View>
                <View>
                    <View style={{
                        flexDirection: "row",
                        marginTop: 10
                    }}>
                        <Text style={{
                            fontSize: 36,
                            fontWeight: "bold",
                            backgroundColor: '#EFD066',
                            color: 'white',
                            padding: 10,
                            borderWidth: 1,
                            borderColor: '#EFD066',
                            borderBottomLeftRadius: 10
                        }}>16th</Text>
                        <Text style={{
                            fontSize: 36,
                            fontWeight: "bold",
                            backgroundColor: '#F5933E',
                            color: 'white',
                            padding: 10,
                            borderWidth: 1,
                            borderColor: '#F5933E',
                            borderBottomRightRadius: 10
                        }}>May, 2022</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <View style={{
                        backgroundColor: '#FEE590',
                        borderRadius: 10,
                        marginTop: 20
                    }}>
                        <Text style={{
                            alignSelf: "center",
                            padding: 15
                        }}>View Service Details</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={{
                        marginTop: 20,
                        fontWeight: "bold"
                    }}>Popular Services</Text>
                </View>
                <View>
                    <FlatList
                        data={listData}
                        renderItem={({ item }) => <Lister item={item} />}
                        showsVerticalScrollIndicator={false}
                        horizontal
                    />

                </View>
                <View style={{ marginTop: 20 }}>
                    <Calendar />
                </View>
                <View>
                    <Text style={{
                        marginTop: 20,
                        fontWeight: "bold",
                        alignSelf: "center"
                    }}>Popular Services</Text>
                </View>
                <View>
                    <BookingTemplate />
                </View>
            </ScrollView>

        </>
    )
}