import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Setting({ navigation }) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 20
        }}>
            <View style={{
                paddingTop: 30,
                alignSelf: "flex-end"
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={{
                        color: '#FEC75C'
                    }}>
                        Done
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{
                    fontSize: 24,
                    fontWeight: "bold"
                }}>
                    Setting
                </Text>
            </View>
            <View style={{
                paddingTop: 30
            }}>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <View style={{
                            paddingRight: 12
                        }}>
                            <MaterialCommunityIcons name="account-outline" size={24} color="black" />
                        </View>
                        <Text>Account management</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 15
                    }}>
                        <View style={{
                            paddingRight: 12
                        }}>
                            <AntDesign name="lock" size={24} color="black" />
                        </View>
                        <Text>Confidentiality</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 15
                    }}>
                        <View style={{
                            paddingRight: 12
                        }}>
                            <MaterialIcons name="language" size={24} color="black" />
                        </View>
                        <Text>Language</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 15
                    }}>
                        <View style={{
                            paddingRight: 12
                        }}>
                            <Octicons name="history" size={22} color="black" />
                        </View>
                        <Text>Your History</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 15
                    }}>
                        <View style={{
                            paddingRight: 12
                        }}>
                            <Ionicons name="notifications-outline" size={24} color="black" />
                        </View>
                        <Text>Notification</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 15
                    }}>
                        <View style={{
                            paddingRight: 12
                        }}>
                            <MaterialIcons name="list-alt" size={24} color="black" />
                        </View>
                        <Text>Privacy Policy</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 15
                    }}>
                        <View style={{
                            paddingRight: 12
                        }}>
                            <Ionicons name="settings" size={24} color="black" />
                        </View>
                        <Text>Setting</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 15
                    }}>
                        <View style={{
                            paddingRight: 12
                        }}>
                            <AntDesign name="questioncircleo" size={24} color="black" />
                        </View>
                        <Text>Support Center</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 15
                    }}>
                        <View style={{
                            paddingRight: 12
                        }}>
                            <MaterialCommunityIcons name="login" size={24} color="black" />
                        </View>
                        <Text>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}