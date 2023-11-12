import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import CalculatorScreen from "./screens/CalculatorScreen";
import HistoryScreen from "./screens/HistoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SettingsScreen from "./screens/SettingsScreen";
import CalculatorContextProvider from './context/CalculatorContext';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <CalculatorContextProvider>
    <NavigationContainer>
      <Drawer.Navigator screenOptions={navStyling}>
        <Drawer.Screen 
        name='Calculator'
        component={CalculatorScreen}
        options={{
          title: 'Calculator',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='calculator-outline' color={color} size={size} />
          ),
        }}/>
        <Drawer.Screen 
        name='Settings'
        component={SettingsScreen}
        options={{
          title: 'Settings',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='settings-outline' color={color} size={size} />
          ),
        }} />
        <Drawer.Screen 
        name='History'
        component={HistoryScreen}
        options={{
          title: 'History',
          drawerIcon: ({ color, size }) => (
            <Ionicons name='cloud-outline' color={color} size={size} />
          ),
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
    </CalculatorContextProvider>
  );
}

const navStyling = {
  headerStyle: {
    backgroundColor: "#0065A4",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 20,
    flex: 1,
  },
});
