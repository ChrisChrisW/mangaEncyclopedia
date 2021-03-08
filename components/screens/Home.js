// Page d'Accueil
import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";
import styles from "../styleSheet/Style";

import { useTheme } from "@react-navigation/native"; // Thème Dark Mode ou Default Mode
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Home({ navigation }) {
  const { colors } = useTheme(); // couleur du thème
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const navigations = (name) => {
    navigation.navigate(name);
    toggleOverlay();
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View
          style={[
            styles.marge,
            {
              justifyContent: "space-around",
              height: 300,
              width: "80%",
            },
          ]}
        >
          <Text style={styles.title}>
            Bienvenue sur l'application Manga Encyclopedia
          </Text>
          <Text>
            Vous pouvez commencer par cliquer sur le premier button pour accéder
            à la description de l'application ou sinon cliquer à droite pour
            chercher les nouveautés en animes.
          </Text>
          <View style={styles.containerButtonPage}>
            <TouchableOpacity onPress={() => navigations("Promo")}>
              <LinearGradient
                style={[styles.gradientButton, { width: 150 }]}
                colors={["#0055ff", "#00aaff"]}
              >
                <Text style={{ color: "white" }}>Go to Promo page</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigations("Upcoming")}>
              <LinearGradient
                style={[styles.gradientButton, { width: 150 }]}
                colors={["#0055ff", "#00aaff"]}
              >
                <Text style={{ color: "white" }}>Go to Upcoming page</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
      <View
        style={[
          styles.marge,
          {
            justifyContent: "space-around",
            height: "100%",
          },
        ]}
      >
        <View>
          <Text style={[styles.title, { color: colors.text }]}>
            Bienvenue à Manga Encyclopedia
          </Text>
          <Text style={{ color: colors.text }}>
            Vous trouverez ici une bibliothèque numérique sur les mangas et les
            animes. Pour commencer à naviguer sur l'application vous pouvez
            cliquer sur le button en haut à droite ou cliquer sur le button
            juste en bas.
          </Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            marginTop: 30,
          }}
        >
          <TouchableOpacity onPress={() => toggleOverlay()}>
            <LinearGradient
              style={[styles.gradientButton, { width: 80 }]}
              colors={["#0055ff", "#00aaff"]}
            >
              <Text style={{ color: "white" }}>Start</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
