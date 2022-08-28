import React from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, VirtualizedList } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
// import { ChonseSelect } from 'react-native-chonse-select';
import { Picker } from '@react-native-picker/picker';
import RadioButtonRN from 'radio-buttons-react-native';
import RadioGroup from 'react-native-radio-buttons-group';

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { CheckBox } from 'react-native-elements'

const radioButtonsData = [{
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Male',
    value: 'Male'
}, {
    id: '2',
    label: 'Female',
    value: 'Female'
}]

export default function Registration({ navigation }) {

    const [selectedCountry, setSelectedCountry] = useState();
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }


    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [name, setName] = useState(null)
    const [zipcode, setZipcode] = useState(null)
    const [gender, setGender] = useState()
    const [checkBoxvalue, setCheckBoxValue] = useState(false)


    return (
        <ScrollView style={styles.container}>
            <View style={styles.loginTextWrapper}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingTop: 40,
                    paddingHorizontal: 20
                }}>Import From</Text>
            </View>
            <View style={{
                flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    shadowColor: 'black',
                    shadowOpacity: '50%',
                    shadowOffset: {
                        height: 10,
                        width: 10
                    },
                    shadowRadius: 50,
                    borderTopWidth: 1,
                    borderColor: 'black',
                    borderLeftWidth: 1,
                    borderBottomWidth: 1,
                    borderRadius: 10
                }}>
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: 'white',
                            borderRadius: 10,
                            borderColor: 'black',
                        }}>
                            <Text style={{
                                fontSize: 25,
                                padding: 20,
                                fontWeight: 'bold',
                                color: '#4588d9',
                            }}>Facebook</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    shadowColor: 'black',
                    shadowOpacity: '50%',
                    shadowOffset: {
                        height: 10,
                        width: 10
                    },
                    justifyContent: 'space-between',
                    shadowRadius: 50,

                    borderTopWidth: 1,
                    borderColor: 'black',
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderRadius: 10
                }}>
                    <TouchableOpacity>
                        <View style={{
                            backgroundColor: '#afe3c3',
                            borderRadius: 10,
                            borderColor: 'black',
                            paddingLeft: 10,
                            paddingRight: 10
                        }}>
                            <Text style={{
                                fontSize: 25,
                                paddingHorizontal: 25,
                                fontWeight: 'bold',
                                color: '#1b7507',
                                paddingVertical: 20
                            }}>Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{
                paddingHorizontal: 20,
                paddingTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#b0b8c2'
            }}>Enter Your Name</Text>
            <View style={styles.inputWrapper}>
                <TextInput placeholder='Name' style={{ fontSize: 20, fontWeight: 'bold' }}
                    value={name}
                    onChangeText={text => setName(text)}
                />
            </View>
            <View>
                <Text style={{
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#b0b8c2'
                }}>Email Address</Text>
                <View style={styles.inputWrapper}>
                    <TextInput placeholder='Email' style={{ fontSize: 20, fontWeight: 'bold' }}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <Text style={{
                    paddingHorizontal: 20,
                    paddingTop: 10,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#b0b8c2'
                }}>Password</Text>
                <View style={styles.inputWrapper}>
                    <TextInput placeholder='Password' style={{ fontSize: 20, fontWeight: 'bold' }}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                    />
                    <AntDesign name="eye" size={24} color="#F47F44" />
                </View>

            </View>
            <Text style={{
                paddingHorizontal: 20,
                paddingTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#b0b8c2',
                paddingBottom: 20
            }}>Date Of Birth</Text>
            <View>
                <View style={{
                    paddingHorizontal: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        borderRadius: 10,
                        borderColor: 'black',
                        borderWidth: 3,
                        paddingHorizontal: 15
                    }}>
                        <TextInput placeholder='Year' style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 10
                        }} />
                    </View>
                    <View style={{
                        borderRadius: 10,
                        borderColor: 'black',
                        borderWidth: 3,
                        marginLeft: 10,
                        paddingHorizontal: 15

                    }}>
                        <TextInput placeholder='Month' style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 10,
                            paddingHorizontal: 15
                        }} />
                    </View>
                    <View style={{
                        borderRadius: 10,
                        borderColor: 'black',
                        borderWidth: 3,
                        marginLeft: 10
                    }}>
                        <TextInput placeholder='Date' style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            padding: 10
                        }} />
                    </View>
                </View>
            </View>
            <Text style={{
                paddingHorizontal: 20,
                paddingTop: 20,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#b0b8c2',
                paddingBottom: 10
            }}>Chose Your Country</Text>
            <View style={{
                paddingHorizontal: 20
            }}>
                <View style={{
                    borderRadius: 10,
                    borderWidth: 1,
                    paddingHorizontal: 10
                }}>
                    <Picker
                        selectedValue={selectedCountry}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCountry(itemValue)
                        }>
                        <Picker.Item label="USA" value="usa" />
                        <Picker.Item label="UK" value="uk" />
                        <Picker.Item label="BD" value="bd" />
                        <Picker.Item label="AR" value="ar" />
                        <Picker.Item label="PK" value="pk" />
                        <Picker.Item label="TR" value="tr" />
                    </Picker>
                </View>
            </View>

            <Text style={{
                paddingHorizontal: 20,
                paddingTop: 20,
                fontSize: 20,
                fontWeight: 'bold',
                color: '#b0b8c2',
                paddingBottom: 20
            }}>Chose Your Gender</Text>
            <View style={{
                paddingHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                {/* <RadioGroup
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                    layout={'row'}
                /> */}
                <View>
                    <Text style={{
                        fontSize: 16,
                        borderWidth: 2,
                        borderRadius: 12,
                        paddingHorizontal: 67,
                        paddingVertical: 22,
                        marginRight: 10
                    }}>Male</Text>
                </View>
                <View>
                    <Text style={{
                        fontSize: 16,
                        borderWidth: 2,
                        borderRadius: 12,
                        paddingHorizontal: 60,
                        paddingVertical: 22,
                        backgroundColor: '#fa7500',
                        color: 'white',
                        borderColor: '#fa7500'
                    }}>Female</Text>
                </View>
            </View>
            <View>
                <View>
                    <Text style={{
                        paddingHorizontal: 20,
                        paddingTop: 20,
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#b0b8c2'
                    }}>Address</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder='Address' style={{ fontSize: 20, fontWeight: 'bold' }}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text style={{
                        paddingHorizontal: 20,
                        paddingTop: 20,
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#b0b8c2'
                    }}>Address 2</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder='Address 2' style={{ fontSize: 20, fontWeight: 'bold' }}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text style={{
                        paddingHorizontal: 20,
                        paddingTop: 20,
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#b0b8c2'
                    }}>Enter Zip Code</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput placeholder='Zip Code' style={{ fontSize: 20, fontWeight: 'bold' }}
                            value={zipcode}
                            onChangeText={text => setZipcode(text)}
                        />
                    </View>
                </View>
            </View>
            <CheckBox
                checked={checkBoxvalue}
                title='Use address as service address'
                checkedIcon={
                    <MaterialCommunityIcons name="checkbox-blank-circle" size={30} color="#FEE590" />
                }
                uncheckedIcon={
                    <Feather name="circle" size={30} color="black" />}
                onPress={() => { setCheckBoxValue(!checkBoxvalue) }}
                wrapperStyle={{ justifyContent: 'space-between' }}
            />
            <View style={{ paddingTop: 22, paddingHorizontal: 20 }} >
                <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
                    <View style={{ backgroundColor: '#f0e37f', borderRadius: 10 }}>
                        <Text style={{
                            padding: 18,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            fontSize: 20
                        }}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    inputWrapper: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderColor: 'black',
        borderWidth: 3,
        margin: 14,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    }
});