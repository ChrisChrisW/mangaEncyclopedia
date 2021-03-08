import React from "react";
import { HeaderLogo, HeaderMenu } from "./Icon";
import { createStackNavigator } from "@react-navigation/stack";

// Appel des différentes pages
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Upcoming from "../screens/Upcoming";
import ResearchManga from "../screens/ResearchManga";
import TopManga from "../screens/TopManga";
import GenreManga from "../screens/GenreManga";
import Promo from "../screens/Promo";
import Contact from "../screens/Contact";
import Detail from "../screens/Detail";
// Création de la navigation Stack
const Stack = createStackNavigator();
// Style des différentes navigations

const screenHeader = ({ navigation }) => ({
  headerLeft: () => <HeaderLogo />,
  headerRight: () => <HeaderMenu />,
});
// Navigation d'Accueil
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={screenHeader} />
    </Stack.Navigator>
  );
};
// Navigation du Profil
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={screenHeader} />
    </Stack.Navigator>
  );
};
// Navigation de Upcoming Manga
const UpcomingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Upcoming"
        component={Upcoming}
        options={screenHeader}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
// Navigation d'Animé
const TopStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Top" component={TopManga} options={screenHeader} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
// Navigation de ResearchManga
const MangaStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Research"
        component={ResearchManga}
        options={screenHeader}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
// Navigation des Genres
const GenreStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Genre"
        component={GenreManga}
        options={screenHeader}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
// Navigation de Promo
const PromoStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Promo" component={Promo} options={screenHeader} />
    </Stack.Navigator>
  );
};
// Navigation de Contact
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contact" component={Contact} options={screenHeader} />
    </Stack.Navigator>
  );
};
// peut être navigation des jeux vidéos tout platformes confondus

// Export des différentes Navigations
export {
  MainStackNavigator,
  ProfileStackNavigator,
  UpcomingStackNavigator,
  TopStackNavigator,
  MangaStackNavigator,
  GenreStackNavigator,
  PromoStackNavigator,
  ContactStackNavigator,
};
