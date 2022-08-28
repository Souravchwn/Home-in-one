import React from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ToggleSwitch from 'toggle-switch-react-native'

export default function Cards({ navigation }) {
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

            <View>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 20,
                        backgroundColor: 'white',
                        paddingBottom: 15,
                        borderBottomWidth: 1,
                        borderColor: '#E2E2E2',
                        justifyContent: "space-between"
                    }}>
                        <Text>Add Another Credit/Debit Card</Text>
                        <Entypo name="cross" size={24} color="black" style={{
                            alignSelf: "flex-start"
                        }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <View style={{
                    backgroundColor: '#F2F2F2',
                    padding: 10,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: '#F2F2F2'
                }}>
                    <TextInput placeholder="Card Number" style={{
                        fontWeight: "bold"
                    }} />
                </View>
            </View>
            <View style={{
                paddingTop: 15,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Text>Expiry</Text>
                <View style={{
                    flexDirection: "row"
                }}>
                    <View style={{
                        backgroundColor: '#F2F2F2',
                        paddingVertical: 13,
                        borderRadius: 14,
                        borderWidth: 1,
                        borderColor: '#F2F2F2',
                        paddingHorizontal: 30,
                        marginRight: 10
                    }}>
                        <TextInput placeholder="MM" style={{
                            fontWeight: "bold"
                        }} />
                    </View>
                    <View style={{
                        backgroundColor: '#F2F2F2',
                        paddingVertical: 13,
                        borderRadius: 14,
                        borderWidth: 1,
                        borderColor: '#F2F2F2',
                        paddingHorizontal: 30
                    }}>
                        <TextInput placeholder="YY" style={{
                            fontWeight: "bold"
                        }} />
                    </View>
                </View>

            </View>
            <View>
                <View style={{
                    backgroundColor: '#F2F2F2',
                    padding: 10,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: '#F2F2F2',
                    marginBottom: 10,
                    marginTop: 20
                }}>
                    <TextInput placeholder="Security Code" style={{
                        fontWeight: "bold"
                    }} />
                </View>
            </View>
            <View>
                <View style={{
                    backgroundColor: '#F2F2F2',
                    padding: 10,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: '#F2F2F2',
                    marginBottom: 10
                }}>
                    <TextInput placeholder="First Name" style={{
                        fontWeight: "bold"
                    }} />
                </View>
            </View>
            <View>
                <View style={{
                    backgroundColor: '#F2F2F2',
                    padding: 10,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: '#F2F2F2'
                }}>
                    <TextInput placeholder="Last Name" style={{
                        fontWeight: "bold"
                    }} />
                </View>
            </View>
            <View style={{
                marginTop: 50,
                marginBottom: 30,
                alignSelf: "flex-end"
            }}>
                <ToggleSwitch
                    isOn={false}
                    onColor="green"
                    offColor="#F2F2F2"
                    label="Save This Card"
                    labelStyle={{ color: "black", fontWeight: "900" }}
                    size="small"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                />
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Thank')}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: '#FEE590',
                        padding: 20,
                        borderRadius: 20,
                        justifyContent: "center"
                    }}><Entypo name="plus" size={24} color="black" style={{
                        paddingRight: 10
                    }} />
                        <Text>Add Card</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}