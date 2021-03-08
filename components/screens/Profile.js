import React from "react";
import styles from "../styleSheet/Style";
import { SafeAreaView, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Avatar } from "react-native-elements";

export default function ProfileScreen() {
  const { colors } = useTheme(); // couleur du thème

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Avatar
        style={{ width: 150, height: 103, margin: 10 }}
        source={require("../../assets/favicon.png")}
      />
      <Text style={[styles.titles, { color: colors.text }]}>Account</Text>
      <View style={styles.mangaDescription}>
        <Text style={{ color: colors.text }}>Name :</Text>
        <Text style={{ color: colors.text }}>Mister Slime</Text>
      </View>
      <View style={styles.mangaDescription}>
        <Text style={{ color: colors.text }}>Country :</Text>
        <Text style={{ color: colors.text }}>World of Slime</Text>
      </View>
      <View style={styles.mangaDescription}>
        <Text style={{ color: colors.text }}>Other detail :</Text>
        <Text style={{ color: colors.text }}>In progress ...</Text>
      </View>
    </SafeAreaView>
  );
}
