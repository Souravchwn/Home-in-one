import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BookingSummary({ navigation }) {


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 20
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
                    }}>Booking Summary</Text>
                </View>
                <View>
                    <Ionicons name="settings-outline" size={29} color="black" />
                </View>
            </View>
            <View>
                <View style={{
                    paddingTop: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Text style={{
                        fontSize: 35,
                        borderBottomWidth: 8,
                        borderColor: '#FEE590',
                        paddingBottom: 5,
                        paddingRight: 25,
                        fontWeight: "bold"
                    }}>Thursday, 19 June</Text>
                    <Entypo name="dots-three-horizontal" size={50} color="black" />
                </View>
            </View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
            }}>
                <Text style={{
                    paddingTop: 10,
                    fontSize: 21,
                    fontWeight: "bold"
                }}>Home Cleaning</Text>
                <Text style={{
                    fontSize: 18,
                    paddingLeft: 27,
                    paddingTop: 10
                }}>Basic Clean</Text>
            </View>
            <Text style={{
                fontSize: 10
            }}>Using Your Current Location</Text>
            <View style={{
                marginTop: 14,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <View style={{
                    height: 86,
                    width: 98,
                    position: "absolute",
                    backgroundColor: '#FEE590',
                    borderRadius: 48,
                    paddingLeft: 200,
                    left: -120,
                }}></View>
                <View style={{
                    borderRadius: 40,
                    borderColor: 'white',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    paddingHorizontal: 90,
                    alignSelf: "center",
                    paddingVertical: 6,
                    marginTop: 2,
                    shadowColor: 'black',
                    shadowOffset: {
                        height: 2,
                        width: 3
                    },
                    shadowOpacity: 1,
                }}>
                    <Text>Your Service Cost</Text>
                    <Text style={{
                        fontWeight: "bold",
                        fontSize: 21,
                        alignSelf: "center"
                    }}>$350</Text>
                </View>

                <Image source={require('../Images/Convenient.png')} />
            </View>
            <View>
                <View style={{
                    marginTop: 20,
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <View>
                        <Text style={{
                            fontSize: 12,
                            paddingTop: 15,
                            fontWeight: "bold"
                        }}>
                            Your home details
                        </Text>
                        <View style={{
                            flexDirection: "row",
                            marginTop: 10
                        }}>
                            <View style={{
                                marginRight: 20
                            }}>
                                <Text style={{ fontSize: 13 }}>Bedrooms</Text>
                                <Text style={{
                                    color: '#8D93A5',
                                    fontSize: 24
                                }}>4</Text>

                            </View>
                            <View style={{
                            }}>
                                <Text style={{ fontSize: 13 }}>Bathrooms</Text>
                                <Text style={{
                                    color: '#8D93A5',
                                    fontSize: 24
                                }}>3</Text>

                            </View>

                        </View>


                    </View>
                    <View style={{
                        height: 90,
                        width: 1,
                        backgroundColor: '#8D93A5',
                        left: 0.9
                    }}></View>
                    <View style={{
                    }}>
                        <Text style={{
                            fontSize: 12,
                            paddingTop: 15,
                            fontWeight: "bold"
                        }}>
                            Estimated Time
                        </Text>
                        <View style={{
                            flexDirection: "row",
                            marginTop: 10
                        }}>
                            <View style={{
                                marginRight: 20
                            }}>
                                <Text style={{
                                    color: '#8D93A5',
                                    fontSize: 24
                                }}>1hr 20min</Text>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View>
                        <View>
                            <Text style={{
                                fontSize: 12,
                                paddingTop: 15,
                                fontWeight: "bold"
                            }}>Your Cleaning Schedule</Text>
                        </View>
                        <View style={{
                            paddingTop: 10
                        }}><View style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                                <View style={{
                                    marginRight: 60
                                }}>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 26
                                    }}>Weekly</Text>
                                </View>
                                <View style={{
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        fontSize: 11
                                    }}>
                                        Afternoon
                                    </Text>
                                    <Text style={{
                                        fontWeight: "bold",
                                        fontSize: 26,
                                    }}>
                                        12pm - 4pm
                                    </Text>
                                </View>

                            </View>

                        </View>
                    </View>

                </View>
            </View>
            <View>
                <View>
                    <Text style={{
                        fontSize: 12,
                        paddingTop: 10,
                        fontWeight: "bold"
                    }}>Addons</Text>
                </View>
                <View style={{
                    flexDirection: "row"
                }}>
                    <View style={{
                        paddingTop: 5
                    }}><View style={{
                        padding: 15,
                        backgroundColor: '#F3F3F4',
                        borderRadius: 10,
                        marginTop: 5,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 12,
                                paddingLeft: 10
                            }}>Inside Cabinets</Text>

                        </View>

                    </View>
                    <View style={{
                        paddingTop: 5,
                        marginLeft: 16
                    }}><View style={{
                        padding: 15,
                        backgroundColor: '#F3F3F4',
                        borderRadius: 10,
                        marginTop: 5,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                            <Text style={{
                                fontWeight: "bold",
                                fontSize: 12,
                                paddingLeft: 10
                            }}>Oven Clean</Text>

                        </View>

                    </View>
                </View>
            </View>
            <View>
                <View style={{
                    borderColor: 'black',
                    borderWidth: 1,
                    borderRadius: 20,
                    marginTop: 10,
                    paddingHorizontal: 8,
                    paddingVertical: 5,
                    marginBottom: 10

                }}>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        paddingLeft: 17,
                        paddingTop: 1
                    }}>No special instruction</Text>
                    <TextInput style={{
                        paddingVertical: 5,
                        paddingLeft: 17
                    }} />
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Cards')}>
                    <View style={{
                        backgroundColor: '#FEE590',
                        borderRadius: 10,
                        alignItems: "center",
                    }}>
                        <Text style={{
                            padding: 18,
                            fontWeight: 'bold',
                            fontSize: 12,
                            color: 'black',
                            alignSelf: "center"
                        }}>Confirm Your Service</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    )
}