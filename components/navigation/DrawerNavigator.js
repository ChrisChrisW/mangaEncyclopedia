import React from "react";
import { useWindowDimensions } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "./DrawerContent";

import {
  MainStackNavigator,
  ProfileStackNavigator,
  UpcomingStackNavigator,
  MangaStackNavigator,
  TopStackNavigator,
  GenreStackNavigator,
  PromoStackNavigator,
  ContactStackNavigator,
} from "./StackNavigator";
//import TabNavigator from "./TabNavigator";

// Créer la navigation Drawer
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    // Navigation pour le mobile/tablette vers la droite
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerType={dimensions.width >= 768 ? "permanent" : "front"}
    >
      <Drawer.Screen name="Home" component={MainStackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
      <Drawer.Screen name="Upcoming" component={UpcomingStackNavigator} />
      <Drawer.Screen name="Top" component={TopStackNavigator} />
      <Drawer.Screen name="Research" component={MangaStackNavigator} />
      <Drawer.Screen name="Genre" component={GenreStackNavigator} />
      <Drawer.Screen name="Promo" component={PromoStackNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
