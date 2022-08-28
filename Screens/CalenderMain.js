import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, Button } from "react-native";
import Calendar from "./Calender";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// import DatePicker from 'react-native-date-picker'

export default function CalendarMain() {

    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)

    return (
        <>
            <View style={{
                backgroundColor: 'white',
                paddingHorizontal: 20,
                flex: 1
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
                        }}>Calendar</Text>
                    </View>
                    <View>
                        <Ionicons name="settings-outline" size={29} color="black" />
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: 'center',
                        paddingVertical: 30,
                        paddingHorizontal: 20
                    }}>
                        <Text style={{
                            fontSize: 16
                        }}>Select Date</Text>
                        <Image source={require('../Images/icons8-schedule(1).png')} style={{
                            height: 25,
                            width: 25
                        }} />
                    </TouchableOpacity>
                    {/* <DatePicker
                        modal
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                        mode="date"
                    /> */}
                </View>
            </View>
            <Calendar />
            <TouchableOpacity style={{
                backgroundColor: 'white',
                paddingHorizontal: 20,
                paddingBottom: 120
            }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingTop: 20
                    }}>
                        <View>
                            <Image source={require('../Screens/Datas/kauai-ikenalani.png')} />
                        </View>
                        <View style={{
                            paddingLeft: 20
                        }}>
                            <View>
                                <Text style={{
                                    fontWeight: "bold",
                                    fontSize: 15
                                }}>Home Cleaning</Text>
                            </View>
                            <View style={{
                                flexDirection: "row",
                                paddingVertical: 2
                            }}>
                                <MaterialIcons name="watch-later" size={24} color="black" style={{
                                    paddingRight: 10
                                }} />
                                <Text style={{
                                    color: '#F9A677'
                                }}>Afternoon</Text>
                            </View>

                            <View>
                                <Text style={{
                                    color: '#288f2b'
                                }}>Thursday, 19 June</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: "center"
                    }}>
                        <Text style={{
                            fontSize: 20
                        }}>400$</Text>
                        <MaterialIcons name="forward-to-inbox" size={24} color="black" />
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}