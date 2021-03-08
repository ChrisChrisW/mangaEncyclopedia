// Page de Manga
import React from "react";
import { SafeAreaView } from "react-native";
import styles from "../styleSheet/Style";

import TopMangaAPI from "../API/TopMangaAPI"; // Rubrique du top

export default function TopManga({ navigation }) {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <TopMangaAPI />
    </SafeAreaView>
  );
}
