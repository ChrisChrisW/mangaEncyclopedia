// variable de la liste
import React from "react";
import styles from "../styleSheet/Style";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native"; // Thème Dark Mode ou Default Mode
import { useNavigation } from "@react-navigation/native";

export function Article({ attributes, type, id }) {
  const navigation = useNavigation(); // https://reactnavigation.org/docs/use-navigation/
  const { colors } = useTheme(); // couleur du thème

  return (
    <View style={styles.containerArticle}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            "Detail", // Dirige vers la page Détails
            {
              url_genres: "/" + type + "/" + id + "/genres",
              title_en: attributes.titles.en,
              title_enjp: attributes.titles.en_jp,
              averageRating: attributes.averageRating,
              synopsis: attributes.synopsis,
              popularityRank: attributes.popularityRank,
              image_url: attributes.posterImage.original,
              startDate: attributes.startDate,
              endDate: attributes.endDate,
              ageRatingGuide: attributes.ageRatingGuide,
              subtype: attributes.subtype,
              type: type,
              status: attributes.status,
              episodeLength: attributes.episodeLength,
              youtube_id: attributes.youtubeVideoId,
            }
          )
        } // Stocker les données pour l'envoyer vers la page Detail.js
        activeOpacity={0.8}
      >
        <Text style={styles.ranking}>#{attributes.popularityRank}</Text>
        <Text style={styles.titleArticle}>{attributes.titles.en_jp}</Text>
        <Image
          style={styles.img}
          source={{ uri: attributes.posterImage.original }}
        />
        <Text
          style={[
            attributes.status == "finished"
              ? styles.Finishedstatus
              : styles.status,
            { color: colors.text },
          ]}
        >
          {attributes.status}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export function DetailArticle(item) {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(
          "Genre" // Dirige vers la page Genre
        )
      }
      activeOpacity={0.8}
    >
      <Text
        style={[styles.type, { color: colors.text, borderColor: colors.text }]}
      >
        {item.attributes.name}
      </Text>
    </TouchableOpacity>
  );
}
