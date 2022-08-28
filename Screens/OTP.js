import React, { cloneElement } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

export default function OTP() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 20
        }}>
            <View style={{
                marginTop: 70
            }}>
                <Text style={{
                    fontSize: 25,
                    textAlign: "center"
                }}>
                    We have sent an OTP to
                    your Mobile
                </Text>
                <Text style={{
                    textAlign: "center",
                    marginTop: 18
                }}>
                    Please check your mobile number 071*****12
                    and enter your code to continue
                </Text>
            </View>
            <View style={{

                marginTop: 30,
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <View style={{
                    borderWidth: 1,
                    borderColor: '#F2F2F2',
                    backgroundColor: '#F2F2F2',
                    borderRadius: 10,
                }}>
                    <TextInput placeholder="*" style={{
                        paddingHorizontal: 17,
                        paddingVertical: 13,
                        textAlign: "center",
                        alignSelf: "center"
                    }} />
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: '#F2F2F2',
                    backgroundColor: '#F2F2F2',

                    borderRadius: 10,
                }}>
                    <TextInput placeholder="*" style={{
                        paddingHorizontal: 17,
                        paddingVertical: 13,
                        textAlign: "center",
                        alignSelf: "center"
                    }} />
                </View>
                <View style={{
                    borderWidth: 1,
                    borderColor: '#F2F2F2',
                    backgroundColor: '#F2F2F2',

                    borderRadius: 10,
                }}>
                    <TextInput placeholder="*" style={{
                        paddingHorizontal: 17,
                        paddingVertical: 13,
                        textAlign: "center",
                        alignSelf: "center"
                    }} />
                </View>

                <View style={{
                    borderWidth: 1,
                    borderColor: '#F2F2F2',
                    backgroundColor: '#F2F2F2',

                    borderRadius: 10,
                }}>
                    <TextInput placeholder="*" style={{
                        paddingHorizontal: 17,
                        paddingVertical: 13,
                        textAlign: "center",
                        alignSelf: "center"
                    }} />
                </View>

            </View>
            <TouchableOpacity>
                <View style={{
                    padding: 15,
                    backgroundColor: '#FEE590',
                    borderRadius: 10,
                    marginTop: 40
                }}>
                    <Text style={{
                        alignSelf: "center"
                    }}>Confirm</Text>
                </View>
            </TouchableOpacity>
            <View style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 50
            }}>
                <Text>
                    Didn't recieve?
                </Text>
                <Text style={{
                    color: '#FEE590',
                    marginLeft: 10
                }}>
                    Click Here
                </Text>
            </View>
        </View>
    )
}