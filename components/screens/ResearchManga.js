// Page de Manga
import React from "react";
import { SafeAreaView } from "react-native";
import styles from "../styleSheet/Style";

import MangaAPI from "../API/MangaAPI"; // Appel de l'API Anime

export default function ResearchManga({ navigation }) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <MangaAPI />
    </SafeAreaView>
  );
}
