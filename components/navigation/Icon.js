// Icones
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styles from "../styleSheet/Style";
import Icon from "react-native-vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native"; // Thème Dark Mode ou Default Mode
import { useNavigation } from "@react-navigation/native";

// Icone du menu hambuger vers la droite du header
export function HeaderMenu() {
  const { colors } = useTheme(); // couleur du thème
  const navigation = useNavigation();

  return (
    <Icon
      name="bars"
      size={20}
      color={colors.text}
      style={{ marginRight: 20 }}
      onPress={() => navigation.toggleDrawer()}
    />
  );
}

// Image du logo de l'application vers la gauche du header
export function HeaderLogo() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      activeOpacity={0.8}
    >
      <Image style={styles.logo} source={require("../../assets/favicon.png")} />
    </TouchableOpacity>
  );
}
