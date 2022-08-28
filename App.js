import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DashboardNavigator from './NavigationContainer/DashboardNavigator';
import Navigation from './Screens/Navigation';


export default function App() {
  return (

    <DashboardNavigator />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
