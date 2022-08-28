import React, { useState, useRef } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, TouchableOpacity, TextInput, Dimensions, ScrollView } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function HouseCleaningTwo({ navigation }) {

    const [selectedBed, setSelectedBed] = useState();
    const [selectedBath, setSelectedBath] = useState();
    const [checkBoxvalue, setCheckBoxValue] = useState(false)
    const [checkBoxinteriorvalue, setCheckBoxinteriorValue] = useState(false)
    const [checkBoxinsidevalue, setCheckBoxinsideValue] = useState(false)
    const [checkBoxbasevalue, setCheckBoxbaseValue] = useState(false)
    const [checkBoxrefvalue, setCheckBoxrefValue] = useState(false)
    const [checkBoxovenvalue, setCheckBoxovenValue] = useState(false)

    const pickerRef = useRef();

    function open() {
        pickerRef.current.focus();
    }

    function close() {
        pickerRef.current.blur();
    }

    return (
        <ScrollView style={{
            paddingHorizontal: 20,
            paddingTop: 30,
            flex: 1,
            backgroundColor: 'white'
        }}><View>
                <TouchableOpacity onPress={() => navigation.navigate('Home Cleaning One')}>
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={{
                fontSize: 21,
                fontWeight: "bold",
                marginTop: 7
            }}>House Cleaning</Text>
            <View>
                <View style={{
                    paddingTop: 10,
                }}>
                    <Text style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        paddingBottom: 10
                    }}>Step 2 of 2</Text>
                </View>
                <View style={{
                    backgroundColor: '#F5F5F5'
                }}>
                    <View style={{
                        width: Dimensions.get('window').width * 0.93,
                        height: 8,
                        backgroundColor: '#FEE590',
                    }}></View>
                </View>
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
                        }}>Choose Your Service Date</Text>
                        <Fontisto name="date" size={24} color="white" style={{ paddingRight: 20 }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{
                    fontSize: 12,
                    paddingTop: 15,
                    fontWeight: "bold"
                }}>
                    Service Time Of Day
                </Text>
                <View style={{
                    marginTop: 20,
                    flexDirection: "row"
                }}>
                    <View style={{
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingHorizontal: 20,
                        paddingVertical: 5
                    }}>
                        <Text style={{ fontSize: 9 }}>Morning</Text>
                        <Text style={{ paddingTop: 11, fontSize: 13 }}>7am - 11am</Text>
                    </View>
                    <View style={{
                        borderWidth: 1,
                        borderRadius: 20,
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        marginLeft: 17
                    }}>
                        <Text style={{ fontSize: 9 }}>Afternoon</Text>
                        <Text style={{ paddingTop: 11, fontSize: 13 }}>12pm - 4pm</Text>

                    </View>
                </View>
                <View>
                    <View>
                        <View>
                            <Text style={{
                                fontSize: 12,
                                paddingTop: 15,
                                fontWeight: "bold",
                                paddingBottom: 10
                            }}>A few more details. Choose all that apply.</Text>
                        </View>
                        <View style={{
                            marginBottom: 20,
                        }}>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <CheckBox
                                    checked={checkBoxvalue}
                                    title='Pets?'
                                    checkedIcon={
                                        <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                    }
                                    uncheckedIcon={
                                        <Feather name="circle" size={30} color="black" />}
                                    onPress={() => setCheckBoxValue(!checkBoxvalue)}
                                    iconRight
                                    wrapperStyle={{ justifyContent: 'space-between' }}
                                    textStyle={{ fontSize: 11 }}
                                />
                                <CheckBox
                                    checked={checkBoxinteriorvalue}
                                    title='Interior Windows   +$5 each'
                                    checkedIcon={
                                        <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                    }
                                    uncheckedIcon={
                                        <Feather name="circle" size={30} color="black" />}
                                    onPress={() => setCheckBoxinteriorValue(!checkBoxinteriorvalue)}
                                    iconRight
                                    wrapperStyle={{ justifyContent: 'space-between' }}
                                    textStyle={{ fontSize: 11 }}
                                />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <CheckBox
                                    checked={checkBoxinsidevalue}
                                    title='Inside Cabinets   +$50'
                                    checkedIcon={
                                        <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                    }
                                    uncheckedIcon={
                                        <Feather name="circle" size={30} color="black" />}
                                    onPress={() => setCheckBoxinsideValue(!checkBoxinsidevalue)}
                                    iconRight
                                    wrapperStyle={{ justifyContent: 'space-between' }}
                                    textStyle={{ fontSize: 11 }}
                                />
                                <CheckBox
                                    checked={checkBoxbasevalue}
                                    title='Base Boards   +$25'
                                    checkedIcon={
                                        <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                    }
                                    uncheckedIcon={
                                        <Feather name="circle" size={30} color="black" />}
                                    onPress={() => setCheckBoxbaseValue(!checkBoxbasevalue)}
                                    iconRight
                                    wrapperStyle={{ justifyContent: 'space-between' }}
                                    textStyle={{ fontSize: 11 }}
                                />
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <CheckBox
                                    checked={checkBoxrefvalue}
                                    title='Refrigerator   +$40'
                                    checkedIcon={
                                        <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                    }
                                    uncheckedIcon={
                                        <Feather name="circle" size={30} color="black" />}
                                    onPress={() => setCheckBoxrefValue(!checkBoxrefvalue)}
                                    iconRight
                                    wrapperStyle={{ justifyContent: 'space-between' }}
                                    textStyle={{ fontSize: 11 }}
                                />
                                <CheckBox
                                    checked={checkBoxovenvalue}
                                    title='Oven Clean   +$45'
                                    checkedIcon={
                                        <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                    }
                                    uncheckedIcon={
                                        <Feather name="circle" size={30} color="black" />}
                                    onPress={() => setCheckBoxovenValue(!checkBoxovenvalue)}
                                    iconRight
                                    wrapperStyle={{ justifyContent: 'space-between' }}
                                    textStyle={{ fontSize: 11 }}
                                />
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
                                    }}>Special instruction</Text>
                                    <TextInput style={{
                                        paddingVertical: 5,
                                        paddingLeft: 17
                                    }} placeholder='(gate code? Front door key location?)' />
                                </View>
                            </View>

                        </View>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <View>
                                <Image source={require('../Images/Guaranteed.png')} />
                            </View>
                            <Text>All of your information is confidential</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View>
                <TouchableOpacity onPress={() => navigation.navigate('BookingSummary')}>
                    <View style={{
                        backgroundColor: '#FEE590',
                        borderRadius: 10,
                        alignItems: "center",
                        marginTop: 20
                    }}>
                        <Text style={{
                            padding: 18,
                            fontWeight: 'bold',
                            fontSize: 12,
                            color: 'black',
                            alignSelf: "center"
                        }}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}