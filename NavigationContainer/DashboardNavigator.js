import React, { Profiler } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from "../Screens/Dashboard";
import Login from "../Screens/Login";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Calender from "../Screens/Calender";
import Service from "../Screens/Service";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import Message from "../Screens/Message";
import Profile from "../Screens/Profile";
import Booking from "../Screens/Booking";
import BookingMain from "../Screens/BookingMain";
import Inbox from "../Screens/inbox";
import InboxRender from "../Screens/inboxRender";
import Payments from "../Screens/payments";
import CalendarMain from "../Screens/CalenderMain";
import Review from "../Screens/Review";
import ReviewRender from "../Screens/ReviewRender";
import Setting from "../Screens/Setting";
import HouseCleaningOne from "../Screens/HouseCleaningOne";
import HouseCleaningTwo from "../Screens/HouseCleaningTwo";
import Messagerlist from "../Screens/messagerlist";
import MessageRender from "../Screens/messageRender";
import NotificationMain from "../Screens/NotificationMain";
import Details from "../Screens/Details";
import BookingSummary from "../Screens/BookingSummary";
import Cards from "../Screens/Cards";
import Thank from "../Screens/Thank";
import Request from "../Screens/request";
import Registration from "../Screens/Registration";
import OTP from "../Screens/OTP";
import LandScapingOne from "../Screens/LandScapingOne";
import LandScapingTwo from "../Screens/LandScapingTwo";
import PoolServiceOne from "../Screens/PoolServiceOne";
import PoolServiceTwo from "../Screens/PoolServiceTwo";
import PestControlTwo from "../Screens/PestControlTwo";
import PestControlOne from "../Screens/PestControlOne";
import WindowWashingOne from "../Screens/WindowWashingOne";
import WindowWashingTwo from "../Screens/WindowWashingTwo";
import TreeTrimmingOne from "../Screens/TreeTrimmingOne";
import TreeTrimmingTwo from "../Screens/TreeTrimmingTwo";

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator();

export default function DashboardNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <SimpleLineIcons name="home" size={24} color="black" />
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Calendar"
                    component={CalendarMain}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <MaterialCommunityIcons name="window-closed-variant" size={24} color="black" />
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Add Service"
                    component={Service}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <AntDesign name="pluscircle" size={50} color="#fac60a" style={{
                            position: "absolute",
                            paddingBottom: 17
                        }} />
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Message"
                    component={MessageRender}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <MaterialCommunityIcons name="inbox-full-outline" size={24} color="black" />
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Profile"
                    component={Registration}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => <MaterialCommunityIcons name="account-outline" size={24} color="black" />
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Booking"
                    component={Booking}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="BookingMain"
                    component={BookingMain}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Inbox"
                    component={InboxRender}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Payments"
                    component={Payments}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Reviews"
                    component={ReviewRender}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Home Cleaning One"
                    component={HouseCleaningOne}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Home Cleaning Two"
                    component={HouseCleaningTwo}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="NotificationMain"
                    component={NotificationMain}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Details"
                    component={Details}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="MessageOf"
                    component={Message}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="BookingSummary"
                    component={BookingSummary}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Cards"
                    component={Cards}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Thank"
                    component={Thank}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="Request"
                    component={Request}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="OTP"
                    component={OTP}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="LandScapingOne"
                    component={LandScapingOne}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="LandScapingTwo"
                    component={LandScapingTwo}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="PoolServiceOne"
                    component={PoolServiceOne}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="PoolServiceTwo"
                    component={PoolServiceTwo}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="PestControlOne"
                    component={PestControlOne}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="PestControlTwo"
                    component={PestControlTwo}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="WindowWashingOne"
                    component={WindowWashingOne}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="WindowWashingTwo"
                    component={WindowWashingTwo}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="TreeTrimmingOne"
                    component={TreeTrimmingOne}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
                <Tab.Screen
                    name="TreeTrimmingTwo"
                    component={TreeTrimmingTwo}
                    options={{
                        headerShown: false,
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}
                    tabBarActiveBackgroundColor='white'
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

