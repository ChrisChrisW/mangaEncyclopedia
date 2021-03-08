// Page des détails des Manga proposés
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import Loading from "../functions/Loading";
import styles from "../styleSheet/Style";
import { useTheme } from "@react-navigation/native"; // Thème Dark Mode ou Default Mode
import { Icon, SocialIcon, Rating, Button } from "react-native-elements";

import { getData } from "../functions/FetchFunction"; // Appel de l'API
import { DetailArticle } from "../functions/Article";
import { LinkYoutube } from "../functions/Alerte"; // Alerte pour confirmer le passage de l'application vers Youtube

// Le route permet de passer une valeur d'un fichier à un autre https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/
export default function Detail({ navigation, route }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Chargement en boolean (vrai)
  const [note] = useState(route.params.averageRating);
  const { colors } = useTheme(); // couleur du thème

  const url = "https://kitsu.io/api/edge" + route.params.url_genres;

  useEffect(() => {
    getData(url, setData, setIsLoading); // Ajout des paramètres de la fonction d'API (FetchFunction.js)
  }, []); // Vide pour que useEffect tourne qu'une seul fois ses fonctions

  // On vérifie s'il y a une date de fin de série
  if (!route.params.endDate) {
    route.params.endDate = "In progress ...";
  }
  // On vérifie si c'est un anime
  if (!route.params.episodeLength) {
    route.params.episodeLength = 0;
  }

  if (!isLoading) {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.center}>
            <Image
              style={styles.imgDetail}
              source={{ uri: route.params.image_url }}
            />
            <Text style={[styles.titles, { color: colors.text }]}>
              {route.params.title_en} - {route.params.title_enjp}
            </Text>
            <Rating
              type="heart"
              startingValue={note / 10} // la note du manga ou anime
              ratingCount={10} // Valeur max de rating
              readonly={true} // la note n'est pas modifiable
              imageSize={20}
              tintColor={colors.background} // couleur de fond
            />
            <View style={styles.mangaDescription}>
              <Text style={{ color: colors.text }}>Popularity rank :</Text>
              <Text style={{ color: colors.text }}>
                {route.params.popularityRank}
              </Text>
            </View>
            <View style={styles.mangaDescription}>
              <Text style={{ color: colors.text }}>Status :</Text>
              <Icon
                name="flag"
                type="ionicons"
                color={
                  route.params.status == "finished"
                    ? "rgba(200,0,0,0.7)"
                    : "rgba(0,200,0,0.7)"
                }
              />
            </View>
            <View style={styles.mangaDescription}>
              <Text style={{ color: colors.text }}>Episodes :</Text>
              <Text style={{ color: colors.text }}>
                {route.params.episodeLength}
              </Text>
            </View>
            <View style={styles.mangaDescription}>
              <Text style={{ color: colors.text }}>Start at :</Text>
              <Text style={{ color: colors.text }}>
                {route.params.startDate}
              </Text>
            </View>
            <View style={styles.mangaDescription}>
              <Text style={{ color: colors.text }}>End at :</Text>
              <Text style={{ color: colors.text }}>{route.params.endDate}</Text>
            </View>
            <View style={styles.mangaDescription}>
              <Text style={{ color: colors.text }}>Age rating guide :</Text>
              <Text style={{ color: colors.text }}>
                {route.params.ageRatingGuide}
              </Text>
            </View>

            <Text style={[styles.titles, { color: colors.text }]}>Genres</Text>
            <View style={[styles.mangaDescription, { color: colors.text }]}>
              <View>
                <FlatList
                  data={data.data}
                  renderItem={({ item }) => <DetailArticle {...item} />}
                />
              </View>
              <View>
                <Text
                  style={[
                    styles.type,
                    { color: colors.text, borderColor: colors.text },
                  ]}
                >
                  {route.params.type}
                </Text>
                <Text
                  style={[
                    styles.type,
                    { color: colors.text, borderColor: colors.text },
                  ]}
                >
                  {route.params.subtype}
                </Text>
              </View>
            </View>

            <Text style={[styles.titles, { color: colors.text }]}>
              Synopsis
            </Text>
            <Text style={[styles.synopsis, { color: colors.text }]}>
              {route.params.synopsis}
            </Text>

            <View style={styles.mangaDescription}>
              <SocialIcon
                raised={false}
                type="youtube"
                onPress={() => LinkYoutube(route)}
              />
              <Button
                title="Revenir en arrère"
                buttonStyle={[
                  styles.gradientButton,
                  { width: 150 },
                  route.params.type == "manga"
                    ? { backgroundColor: "#FF7F50" }
                    : { backgroundColor: "#87CEEB" },
                ]}
                onPress={() => navigation.goBack()} // Revenir à la page précédent
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <Loading />;
  }
}
