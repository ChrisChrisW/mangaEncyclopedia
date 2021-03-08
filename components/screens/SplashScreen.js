import React from "react";
import styles from "../styleSheet/Account";
import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#33A5A6" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="zoomIn"
          duraton="1500"
          source={require("../../assets/adaptive-icon.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="zoomIn"
      >
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}
        >
          Manga Encyclopedia
        </Text>
        <Text style={styles.text}>seulement connexion !</Text>
        <View style={styles.buttonSplash}>
          <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
            <LinearGradient
              colors={["#0E505B", "#00aaff"]}
              style={styles.signInSplash}
            >
              <Text style={styles.textSignSplash}>Démarrer</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Text style={{ color: colors.text }}>par Christophe WANG</Text>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;
