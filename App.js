import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import CalculatorScreen from "./screens/CalculatorScreen";
import HistoryScreen from "./screens/HistoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SettingsScreen from "./screens/SettingsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navStyling}>
        <Stack.Screen name="Geo Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
