import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MainStackNavigator,
  UpcomingStackNavigator,
  MangaStackNavigator,
  TopStackNavigator,
  GenreStackNavigator,
  ContactStackNavigator,
} from "./StackNavigator";
// Création de la navigation du bas Tabs
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    // Navigation du bas
    <Tab.Navigator>
      <Tab.Screen name="Accueil" component={MainStackNavigator} />
      <Tab.Screen name="Upcoming" component={UpcomingStackNavigator} />
      <Tab.Screen name="Research" component={MangaStackNavigator} />
      <Tab.Screen name="Top" component={TopStackNavigator} />
      <Tab.Screen name="Genre" component={GenreStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
