import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Service({ navigation }) {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <View style={{ paddingTop: 30 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 25,
                    paddingTop: 10,
                    fontWeight: "bold"
                }}>Choose Your Service</Text>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                marginTop: 50
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home Cleaning One')}>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 35,
                            borderColor: 'black',
                            borderRadius: 10,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 38,
                        }}>
                            <Image source={require('../Images/icons8-home-48.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Home Cleaning</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('LandScapingOne')}>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 35,
                            borderColor: 'black',
                            borderRadius: 10,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 45
                        }}>
                            <Image source={require('../Images/icons8-sun-48.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Landscaping</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('PoolServiceOne')}>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 35,
                            borderColor: 'black',
                            borderRadius: 10,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 44,
                        }}>
                            <Image source={require('../Images/icons8-pool-48.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Pool Services</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PestControlOne')}>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 35,
                            borderColor: 'black',
                            borderRadius: 10,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 47
                        }}>
                            <Image source={require('../Images/icons8-insectic.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Pest Control</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('WindowWashingOne')}>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 35,
                            borderColor: 'black',
                            borderRadius: 10,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 32,
                        }}>
                            <Image source={require('../Images/icons8-closed-w.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Window Washing</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('TreeTrimmingOne')}>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 35,
                            borderColor: 'black',
                            borderRadius: 10,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 40
                        }}>
                            <Image source={require('../Images/icons8-forest-4.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Tree Trimming</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}