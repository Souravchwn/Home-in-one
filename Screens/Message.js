import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Message({ navigation }) {
    return (
        <View style={{
            backgroundColor: 'white',
            flex: 1,
            paddingHorizontal: 20,
            justifyContent: 'space-between'
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
                    }}>Mesages</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <View>
                        <Ionicons name="settings-outline" size={29} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
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
            </View>
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
                    }}>Jack Sparrow</Text>
                    <Text style={{
                        color: '#4D4D4D'
                    }}>+1 951 221 1121</Text>
                    <Text style={{
                        backgroundColor: '#46B739',
                        color: 'white',
                        marginTop: 5,
                        fontSize: 9,
                        borderRadius: 10,
                        alignSelf: "center",
                        paddingVertical: 2,
                        paddingHorizontal: 54
                    }}>Online</Text>
                </View>

                <View style={{
                    alignSelf: "flex-start",
                }}>
                    <Text>3:40 PM</Text>
                </View>

            </View>
            <View style={{
                alignSelf: "flex-end",
                paddingTop: 7
            }}>
                <Text style={{
                    color: '#4D4D4D'
                }}>Delivered 10:20 AM</Text>
            </View>
            <View style={{
                flexDirection: "row",
                paddingRight: 50
            }}><View style={{
                backgroundColor: '#4D4D4D',
                borderRadius: 32,
                height: 37,
                width: 37,
                marginRight: 20
            }}></View>
                <View>
                    <View style={{
                        backgroundColor: '#F2F2F2',
                        borderWidth: 2,
                        borderColor: '#FBE7A4',
                        borderRadius: 10,
                    }}>
                        <Text style={{
                            padding: 10,
                            alignSelf: "flex-start"
                        }}>I love my service!</Text>
                    </View>
                    <View style={{
                        backgroundColor: '#F2F2F2',
                        borderWidth: 2,
                        borderColor: '#FBE7A4',
                        borderRadius: 10,
                        marginTop: 10,
                    }}>
                        <Text style={{
                            padding: 10,
                        }}>How is everything going?</Text>
                    </View>
                    <View>
                        <View style={{
                            backgroundColor: '#F2F2F2',
                            borderRadius: 10,
                            marginTop: 10,

                        }}>
                            <Text style={{
                                padding: 10,
                                textAlign: "right"
                            }}>Service Begin 3:32pm</Text>
                        </View>
                        <View style={{
                            backgroundColor: '#F2F2F2',
                            borderRadius: 10,
                            marginTop: 10,
                        }}>
                            <Text style={{
                                padding: 10,
                                textAlign: "right"
                            }}>There is no problem in here. Just a little business that I have not finished yet.</Text>
                        </View>
                    </View>

                </View>

            </View>
            <View style={{
                flexDirection: "row",
                paddingRight: 50,
                alignItems: "center",
                paddingTop: 10,
                marginRight: 18
            }}><View style={{
                backgroundColor: '#4D4D4D',
                borderRadius: 32,
                height: 37,
                width: 37,
                marginRight: 20
            }}></View>
                <View>
                    <View style={{
                        backgroundColor: '#F2F2F2',
                        borderWidth: 2,
                        borderColor: '#FBE7A4',
                        borderRadius: 10,
                    }}>
                        <Text style={{
                            padding: 10,
                            alignSelf: "flex-start"
                        }}>Oh okay, Let me help you if you have a trouble. I know that I can’t help you more but don’t hesitate to call me.</Text>
                    </View>
                </View>
            </View>

            <View style={{
                flexDirection: "row",
                backgroundColor: '#FB9740',
                padding: 10,
                justifyContent: 'space-between',
                marginTop: 20,
                marginBottom: 16
            }}>
                <View style={{
                    flexDirection: "row"
                }}>
                    <FontAwesome name="send" size={24} color="white" style={{
                        marginRight: 10
                    }} />
                    <TextInput placeholder="Type Your Text Here" />
                </View>
                <Ionicons name="md-images-outline" size={24} color="white" />
            </View>

        </View>
    )
}