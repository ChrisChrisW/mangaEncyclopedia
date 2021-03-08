import React from "react";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../context";

export function DrawerContent(props) {
  const paperTheme = useTheme();

  const { signOut, toggleTheme } = React.useContext(AuthContext);

  let isDarkMode = paperTheme.dark;

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../../assets/favicon.png")}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Manga Encyclopedia</Title>
                <Caption style={styles.caption}>@LP-MDN.dev</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="cloud-outline" color={color} size={size} />
              )}
              label="Promo"
              onPress={() => {
                props.navigation.navigate("Promo");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="help-circle-outline" color={color} size={size} />
              )}
              label="Contact"
              onPress={() => {
                props.navigation.navigate("Contact");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Mangas/Animes">
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="star-outline" color={color} size={size} />
              )}
              label="Upcoming"
              onPress={() => {
                props.navigation.navigate("Upcoming");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="trophy-outline" color={color} size={size} />
              )}
              label="Top"
              onPress={() => {
                props.navigation.navigate("Top");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="book-search-outline" color={color} size={size} />
              )}
              label="Research"
              onPress={() => {
                props.navigation.navigate("Research");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="filter-outline" color={color} size={size} />
              )}
              label="Genre"
              onPress={() => {
                props.navigation.navigate("Genre");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>
                  <Icon
                    name={"weather-" + (isDarkMode ? "night" : "sunny")}
                    size={20}
                  />
                  {"  "}
                  {isDarkMode ? "Dark" : "Light"} Theme
                </Text>
                <View pointerEvents="none">
                  <Switch
                    value={isDarkMode}
                    trackColor={{ false: "#f9d71c", true: "#CACACA" }} // Couleur remplissage du switch
                    thumbColor={!isDarkMode ? "#f9d71c" : "#F4F4F4"} // Couleur rond du switch
                  />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Se déconnecter"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
