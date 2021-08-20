import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./usuarioLogeado/home";
import RutinaSeleccionada from "./usuarioLogeado/elementos/rutina";
import DiaDeRutinaDisplay from "./usuarioLogeado/elementos/diaDeEntrenamiento";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="rutinaSeleccionada" component={RutinaSeleccionada} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
