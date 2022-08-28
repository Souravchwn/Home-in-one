import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard({ navigation }) {
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
                    }}>Dashboard</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                    <View>
                        <Ionicons name="settings-outline" size={29} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Inbox')}>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 30,
                            borderColor: 'black',
                            borderRadius: 30,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 48,
                        }}>
                            <Image source={require('../Images/icons8-product-.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Inbox</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 30,
                            borderColor: 'black',
                            borderRadius: 30,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 48,
                        }}>
                            <Image source={require('../Images/icons8-tasklist.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Bookings</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 30,
                            borderColor: 'black',
                            borderRadius: 30,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 48,
                        }}>
                            <Image source={require('../Images/icons8-schedule.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Calenders</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Payments')}>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 30,
                            borderColor: 'black',
                            borderRadius: 30,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 25,
                        }}>
                            <Image source={require('../Images/icons8-smart-ca.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Payments & Cards</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('Reviews')}>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 30,
                            borderColor: 'black',
                            borderRadius: 30,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 34,
                        }}>
                            <Image source={require('../Images/icons8-signing-.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Leave A Review</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 30,
                            borderColor: 'black',
                            borderRadius: 30,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 42,
                        }}>
                            <Image source={require('../Images/icons8-ledger-4.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Subscription</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: "row",
                justifyContent: "center"
            }}>
                <TouchableOpacity>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 30,
                            borderColor: 'black',
                            borderRadius: 30,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 48,
                        }}>
                            <Image source={require('../Images/icons8-notifica.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>Notification</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        paddingHorizontal: 5
                    }}>
                        <View style={{
                            marginTop: 20,
                            paddingVertical: 30,
                            borderColor: 'black',
                            borderRadius: 30,
                            borderWidth: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: 48,
                        }}>
                            <Image source={require('../Images/icons8-service-.png')} />
                            <Text style={{
                                fontSize: 12,
                                fontWeight: "bold"
                            }}>About HIO</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}