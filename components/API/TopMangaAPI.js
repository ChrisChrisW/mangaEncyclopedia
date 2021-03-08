// API Top de l'application
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Switch } from "react-native";
import Loading from "../functions/Loading";
import styles from "../styleSheet/Style";
import { useTheme } from "@react-navigation/native"; // Thème Dark Mode ou Default Mode

import { getData } from "../functions/FetchFunction"; // Appel de l'API
import { switchTypeTop } from "../functions/SwitchFunction";

import { Article } from "../functions/Article";

export default function TopMangaAPI() {
  // Recupérer la donnée type dans Anime.js et Manga.js et le transmettre dans url
  // Documentation de l'API https://jikan.docs.apiary.io/#reference/0/anime
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Chargement en boolean (vrai)
  const [refreshPage, setRefreshPage] = useState(false); // Lors de la recherche, il nous faut un booléan pour rafraichir la liste des choix d'animés/mangas
  const [type, setType] = useState("manga"); // Type manga ou anime
  const [switchValue, setSwitchValue] = useState(false); // Booléan pour un switch on et off
  const { colors } = useTheme(); // couleur du thème

  const url = "https://kitsu.io/api/edge/trending/" + type;

  useEffect(() => {
    setRefreshPage(true); // Rafraichir l'affichage des articles
    getData(url, setData, setIsLoading); // Ajout des paramètres de la fonction d'API (FetchFunction.js)
    setRefreshPage(false);
    //console.log(data);
    //console.log(isLoading);
    //console.log("URL => "+url);
  }, [type]); // Vide pour que useEffect tourne qu'une seul fois ses fonctions

  if (!isLoading) {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { color: colors.text }]}>Top {type}s</Text>
        <View style={styles.containerSwitch}>
          <Text
            style={[
              !switchValue ? { opacity: 1 } : { opacity: 0.2 },
              { color: colors.text },
            ]}
          >
            Mangas
          </Text>
          <Switch
            style={{ margin: 30 }}
            trackColor={{ false: "#FF7F50", true: "#87CEEB" }} // Couleur remplissage du switch
            thumbColor={!switchValue ? "#FF8C00" : "#87CEFA"} // Couleur rond du switch
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value) => {
              switchTypeTop(value, setSwitchValue, setType);
            }}
            value={switchValue}
          />
          <Text
            style={[
              !switchValue ? { opacity: 0.2 } : { opacity: 1 },
              { color: colors.text },
            ]}
          >
            Animes
          </Text>
        </View>
        <FlatList
          horizontal={true} // Mettre à l'horizontale les éléments
          showsHorizontalScrollIndicator={false} // enlève le scrollBar horizontal
          data={data.data}
          renderItem={({ item }) => <Article {...item} />}
          onRefresh={refreshPage} // rafraichir lors d'une nouvelle recherche
          progressViewOffset={refreshPage} // effet visuel lors du rafrachissement
        />
      </View>
    );
  } else {
    return (
      <Loading />
    );
  }
}
