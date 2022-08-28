import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BookingMain({ route }) {

    const { item } = route.params

    const [selectedBed, setSelectedBed] = useState();
    const [selectedBath, setSelectedBath] = useState();
    const [checkBoxvalue, setCheckBoxValue] = useState(false)
    const [checkInsideCabinets, setInsideCabinets] = useState(false)
    const [checkovenclean, setCheckOvenClean] = useState(false)

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
                    }}>Dashboard</Text>
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
                    }}>{item.date}</Text>
                    <Entypo name="dots-three-horizontal" size={50} color="black" />
                </View>
            </View>
            <View>
                <Text style={{
                    paddingTop: 10,
                    fontSize: 21,
                    fontWeight: "bold"
                }}>{item.name}</Text>
            </View>
            <View style={{
                marginTop: 20
            }}>
                <TouchableOpacity>
                    <View style={{
                        backgroundColor: '#FA973F',
                        borderRadius: 10,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Text style={{
                            padding: 18,
                            fontWeight: 'bold',
                            fontSize: 12,
                            color: 'white'
                        }}>Basic Clean</Text>
                        <AntDesign name="plus" size={27} color="white" style={{
                            paddingRight: 10
                        }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{
                    fontSize: 12,
                    paddingTop: 15,
                    fontWeight: "bold"
                }}>
                    Your home details
                </Text>
                <View style={{
                    marginTop: 20,
                    flexDirection: "row"
                }}>
                    <View style={{
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingHorizontal: 20,
                        paddingVertical: 1
                    }}>
                        <Text style={{ fontSize: 13 }}>Bedrooms</Text>
                        <Picker
                            selectedValue={selectedBed}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedBed(itemValue)
                            }
                            dropdownIconColor='black'>
                            <Picker.Item label="1" value="one" />
                            <Picker.Item label="2" value="two" />
                            <Picker.Item label="3" value="three" />
                            <Picker.Item label="4" value="four" />
                        </Picker>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingHorizontal: 20,
                        paddingVertical: 2,
                        marginLeft: 17,


                    }}>
                        <Text style={{ fontSize: 13 }}>Bathrooms</Text>
                        <Picker
                            selectedValue={selectedBath}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedBath(itemValue)
                            }
                        >
                            <Picker.Item label="1" value="one" />
                            <Picker.Item label="2" value="two" />
                            <Picker.Item label="3" value="three" />
                            <Picker.Item label="4" value="four" />
                        </Picker>
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
                            paddingVertical: 7,
                            backgroundColor: '#F3F3F4',
                            borderRadius: 20,
                            marginTop: 5,
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                                <Text style={{
                                    fontWeight: "bold",
                                    fontSize: 12
                                }}>Weekly</Text>
                                <CheckBox
                                    checked={checkBoxvalue}
                                    checkedIcon={
                                        <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                    }
                                    uncheckedIcon={
                                        <Feather name="circle" size={30} color="black" />}
                                    onPress={() => setCheckBoxValue(!checkBoxvalue)}
                                    iconRight
                                />
                            </View>

                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={{
                                fontSize: 12,
                                paddingTop: 15,
                                fontWeight: "bold"
                            }}>Service Time Of Day</Text>
                        </View>
                        <View style={{
                            borderColor: '#FEE590',
                            borderWidth: 1,
                            borderRadius: 20,
                            marginTop: 10,
                            paddingHorizontal: 10,
                            paddingVertical: 5
                        }}>
                            <View>
                                <Text style={{ fontSize: 9 }}>{item.time}</Text>
                                <Text style={{ paddingTop: 11, fontSize: 13 }}>12pm - 4pm</Text>

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
                        padding: 5,
                        backgroundColor: '#F3F3F4',
                        borderRadius: 20,
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
                            <CheckBox
                                checked={checkInsideCabinets}
                                checkedIcon={
                                    <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                }
                                uncheckedIcon={
                                    <Feather name="circle" size={30} color="black" />}
                                onPress={() => setInsideCabinets(!checkInsideCabinets)}
                                iconRight
                            />
                        </View>

                    </View>
                    <View style={{
                        paddingTop: 5,
                        marginLeft: 16
                    }}><View style={{
                        padding: 5,
                        backgroundColor: '#F3F3F4',
                        borderRadius: 20,
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
                            <CheckBox
                                checked={checkovenclean}
                                checkedIcon={
                                    <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                }
                                uncheckedIcon={
                                    <Feather name="circle" size={30} color="black" />}
                                onPress={() => setCheckOvenClean(!checkovenclean)}
                                iconRight
                            />
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
                <TouchableOpacity>
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
                        }}>Track Your Service</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}