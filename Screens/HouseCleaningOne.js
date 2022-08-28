import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Text, View, Image, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HouseCleaningOne({ navigation }) {

    const [selectedBed, setSelectedBed] = useState();
    const [selectedBath, setSelectedBath] = useState();
    const [checkBoxvalue, setCheckBoxValue] = useState(false)
    const [checkBoxbimonthlyvalue, setCheckBoxbimonthlyValue] = useState(false)
    const [checkBoxmonthlyvalue, setCheckBoxmonthlyValue] = useState(false)
    const [checkBoxonetimevalue, setCheckBoxonetimeValue] = useState(false)

    return (
        <View style={{
            paddingHorizontal: 20,
            paddingTop: 30,
            flex: 1,
            backgroundColor: 'white'
        }}><View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
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
                    }}>Step 1 of 2</Text>
                </View>
                <View style={{
                    backgroundColor: '#F5F5F5'
                }}>
                    <View style={{
                        width: Dimensions.get('window').width * 0.47,
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
                        }}>Type Of Clean</Text>
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
                    Tell us about your home
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
                            }>
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
                        paddingVertical: 1,
                        marginLeft: 17
                    }}>
                        <Text style={{ fontSize: 13 }}>Bathrooms</Text>
                        <Picker
                            selectedValue={selectedBath}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedBath(itemValue)
                            }>
                            <Picker.Item label="1" value="one" />
                            <Picker.Item label="2" value="two" />
                            <Picker.Item label="3" value="three" />
                            <Picker.Item label="4" value="four" />
                        </Picker>
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
                            }}>Choose Your Cleaning Schedule</Text>
                        </View>
                        <View style={{
                            marginBottom: 20
                        }}>
                            <CheckBox
                                checked={checkBoxvalue}
                                title='Weekly'
                                checkedIcon={
                                    <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                }
                                uncheckedIcon={
                                    <Feather name="circle" size={30} color="black" />}
                                onPress={() => { checkBoxonetimevalue, checkBoxbimonthlyvalue, checkBoxmonthlyvalue === false ? setCheckBoxValue(!checkBoxvalue) : false }}
                                iconRight
                                wrapperStyle={{ justifyContent: 'space-between' }}
                            />
                            <CheckBox
                                checked={checkBoxbimonthlyvalue}
                                title='Bi-Monthly'
                                checkedIcon={
                                    <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                }
                                uncheckedIcon={
                                    <Feather name="circle" size={30} color="black" />}
                                onPress={() => { checkBoxvalue, checkBoxonetimevalue, checkBoxmonthlyvalue === false ? setCheckBoxbimonthlyValue(!checkBoxbimonthlyvalue) : false }}
                                iconRight
                                wrapperStyle={{ justifyContent: 'space-between' }}
                            />
                            <CheckBox
                                checked={checkBoxmonthlyvalue}
                                title='Monthly'
                                checkedIcon={
                                    <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                }
                                uncheckedIcon={
                                    <Feather name="circle" size={30} color="black" />}
                                onPress={() => { checkBoxvalue, checkBoxbimonthlyvalue, checkBoxonetimevalue === false ? setCheckBoxmonthlyValue(!checkBoxmonthlyvalue) : false }}
                                iconRight
                                wrapperStyle={{ justifyContent: 'space-between' }}
                            />
                            <CheckBox
                                checked={checkBoxonetimevalue}
                                title='One Time'
                                checkedIcon={
                                    <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                                }
                                uncheckedIcon={
                                    <Feather name="circle" size={30} color="black" />}
                                onPress={() => { checkBoxvalue, checkBoxbimonthlyvalue, checkBoxmonthlyvalue === false ? setCheckBoxonetimeValue(!checkBoxonetimevalue) : false }}
                                iconRight
                                wrapperStyle={{ justifyContent: 'space-between' }}
                            />
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
                <TouchableOpacity onPress={() => navigation.navigate('Home Cleaning Two')}>
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
                        }}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}