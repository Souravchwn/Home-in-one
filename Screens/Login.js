import React, { useContext } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
export default function Login({ navigation }) {


    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.loginTextWrapper}>
                <Text style={styles.loginText}>Login</Text>
                <Text style={{
                    fontSize: 14,
                    paddingTop: 7
                }}>Add Your Details To Login</Text>
            </View>
            <View>
                <View style={styles.inputWrapper}>
                    <TextInput placeholder='Email' style={{ fontSize: 20, fontWeight: 'bold' }}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput placeholder='Password' style={{ fontSize: 20, fontWeight: 'bold' }}
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry
                    />
                </View>
            </View>
            <View style={{ paddingTop: 22, paddingHorizontal: 20 }} >
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#f0e37f', borderRadius: 10 }}>
                        <Text style={{
                            padding: 18,
                            fontWeight: 'bold',
                            alignSelf: 'center',
                            fontSize: 20
                        }}>Login</Text>
                    </View>
                </TouchableOpacity>

                <View style={{
                    alignItems: 'center',
                    paddingTop: 20
                }}>
                    <View>
                        <Text>Forgot Your Password?</Text>
                    </View>
                    <View style={{
                        paddingTop: 20
                    }}>
                        <Text>-Or Login With-</Text>
                    </View>
                </View>
                <View style={{
                    paddingTop: 15
                }}>
                    <TouchableOpacity>
                        <View style={{ backgroundColor: '#4b72de', borderRadius: 10, marginTop: 10 }}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                padding: 20,
                                alignItems: 'center'
                            }}>
                                <Entypo name="facebook-with-circle" size={27} color="white" />
                                <Text style={{
                                    fontWeight: 'bold',
                                    alignSelf: 'center',
                                    fontSize: 20,
                                    color: 'white',
                                    paddingLeft: 10
                                }}>Login With Facebook</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ backgroundColor: '#d93434', borderRadius: 10, marginTop: 10 }}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                padding: 20,
                                alignItems: 'center'
                            }}>
                                <AntDesign name="googleplus" size={27} color="white" />
                                <Text style={{
                                    fontWeight: 'bold',
                                    alignSelf: 'center',
                                    fontSize: 20,
                                    color: 'white',
                                    paddingLeft: 10
                                }}>Login With Google</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ backgroundColor: '#080808', borderRadius: 10, marginTop: 10 }}>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                padding: 20,
                                alignItems: 'center'
                            }}>
                                <AntDesign name="apple1" size={27} color="white" />
                                <Text style={{
                                    fontWeight: 'bold',
                                    alignSelf: 'center',
                                    fontSize: 20,
                                    color: 'white',
                                    paddingLeft: 10
                                }}>Login With Apple</Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 10
                }}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                        <Text style={{
                            color: '#f59e07',
                            paddingLeft: 10
                        }}>Create An Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    loginText: {
        fontSize: 40
    },
    loginTextWrapper: {
        paddingTop: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40
    },
    inputWrapper: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderColor: 'black',
        borderWidth: 3,
        margin: 14,
        borderRadius: 10

    }
});