// Page de Manga
import React from "react";
import { SafeAreaView } from "react-native";
import styles from "../styleSheet/Style";
import UpcomingMangaAPI from "../API/UpcomingMangaAPI"; // Appel de l'API Anime

export default function ResearchManga({ navigation }) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <UpcomingMangaAPI />
    </SafeAreaView>
  );
}
