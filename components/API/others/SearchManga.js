// Script non utlisé
// Usage d'un API et usage d'axios
import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SearchBar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import axios from "axios";

export default function SearchManga() {
  // Documentation de l'API https://jikan.docs.apiary.io/#reference/0/anime
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Chargement en boolean (vrai)
  const navigation = useNavigation(); // https://reactnavigation.org/docs/use-navigation/
  const [search, setSearch] = useState(""); // La recherche en string
  const [page, setPage] = useState(1); // Les pages en int et ensuite convertit en string durant l'appel à l'API

  useEffect(() => {
    // stocker l'API dans getData
    async function getData() {
      const result = await axios(
        "https://api.jikan.moe/v3/search/anime?q=" +
          search +
          "&page=" +
          page.toString() +
          "&genre=1"
      );
      setData(result.data);
      setIsLoading(false); // Chargement faux
    }
    getData(); // Appel de l'API
    // Test des appels de l'API dans la console
    console.log("test loading data");
    console.log(data);
    console.log(isLoading);
  }, []); // Vide pour que useEffect tourne qu'une seul fois ses fonctions

  // variable de la liste
  const _renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{item.title}</Text>
      <Image style={styles.img} source={{ uri: item.image_url }} />
      <Button
        title="Voir en détails  "
        iconRight
        icon={
          <Icon
            name="chevron-right" // icone flèche vers la droite
            size={14}
            color="white"
          />
        }
        onPress={() =>
          navigation.navigate(
            "Detail", // Dirige vers la page DetailManga
            {
              title: item.title,
              image_url: item.image_url,
              synopsis: item.synopsis,
            } // Stocker les données d'items
          )
        }
      />
    </View>
  );
  return (
    <View>
      <View style={styles.SearchContainer}>
        <SearchBar
          style={styles.textInputStyle}
          searchIcon={{ size: 24 }}
          onChangeText={(text) => (text ? setSearch(text) : setSearch(""))} // Condition modifiant le contenu de la variable search
          value={search} // Valeur inscrite sur la barre de recherche
          placeholder="Rechercher votre manga ..."
        />
      </View>
      <View style={styles.FlatlistContainer}>
        <FlatList
          horizontal={true} // Mettre à l'horizontale les éléments
          showsHorizontalScrollIndicator={false} // enlève le scrollBar horizontal
          keyExtriactor={(item, index) => index.toString()}
          data={data.results}
          renderItem={_renderItem}
        />
      </View>
      <View style={styles.ButtonPage}>
        <Button
          title="Page précédente"
          onPress={() => {
            setPage((previousPage) => previousPage - 1);
          }}
        ></Button>
        <Button
          title="Page suivante"
          onPress={() => {
            setPage((nextPage) => nextPage + 1);
          }}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height - 300,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    margin: 10,
    marginBottom: 5,
  },
  img: {
    width: Dimensions.get("screen").width - 100,
    height: Dimensions.get("screen").height - 550,
    borderRadius: 30,
    marginBottom: 10,
  },
  SearchContainer: {
    flex: 0.2,
    width: Dimensions.get("screen").width,
    height: 10,
  },
  FlatlistContainer: {
    flex: 2,
  },
  ButtonPage: {
    flex: 0.2,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
});
