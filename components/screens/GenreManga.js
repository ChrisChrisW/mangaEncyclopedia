// Page de Manga
import React from "react";
import { SafeAreaView } from "react-native";
import styles from "../styleSheet/Style";

import GenreMangaAPI from "../API/GenreMangaAPI"; // Rubrique du top

export default function GenreManga({ navigation }) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <GenreMangaAPI />
    </SafeAreaView>
  );
}
