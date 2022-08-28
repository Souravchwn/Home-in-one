import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Payments() {
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
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
                    }}>Payments And Cards</Text>
                </View>
                <View>
                    <Ionicons name="settings-outline" size={29} color="black" />
                </View>
            </View>
            <View>
                <Text style={{
                    paddingTop: 30,
                    borderBottomWidth: 2,
                    borderColor: '#E2E2E2',
                    paddingBottom: 5

                }}>Customize Your Payment Method</Text>
            </View>
            <View style={{
                marginTop: 20,
                backgroundColor: '#F7F7F7',
                padding: 20,
                borderBottomWidth: 30,
                borderColor: '#BBBBBB'
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderColor: '#E2E2E2',
                    paddingBottom: 10
                }}>
                    <Text style={{
                        fontSize: 12
                    }}>Cash/Card on delivery</Text>
                    <Ionicons name="checkmark-sharp" size={26} color="#FFC85D" />
                </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 20,
                    borderBottomWidth: 1,
                    borderColor: '#E2E2E2',
                    paddingBottom: 10
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Image source={require('../Images/pngwing.com(4).png')} style={{
                            height: 32,
                            width: 54,
                            marginRight: 20
                        }}
                            resizeMode={'cover'} />
                        <Text>**** **** ****</Text>
                    </View>
                    <TouchableOpacity>
                        <View>
                            <Text style={{
                                fontSize: 11,
                                borderWidth: 3,
                                borderColor: '#FDD484',
                                color: '#FDD484',
                                padding: 10,
                                borderRadius: 20,
                                alignSelf: "center"
                            }}>Delete card</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    paddingTop: 20
                }}>
                    <TouchableOpacity>
                        <Text>
                            Other Methods
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 20,
                        backgroundColor: '#FEE590',
                        padding: 20,
                        borderRadius: 20
                    }}>
                        <Feather name="plus" size={24} color="black" style={{ marginRight: 16 }} />
                        <Text>Add Another Credit/Debit Card</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                paddingHorizontal: 100,
                paddingTop: 60
            }}>
                <Text style={{
                    fontSize: 11,
                    textAlign: "center"
                }}>
                    *You will not be charged until
                    your service is completed.
                </Text>
            </View>
            <View>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 60,
                        backgroundColor: '#FEE590',
                        padding: 20,
                        borderRadius: 20,
                        justifyContent: "center"
                    }}>
                        <Text>Done</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}