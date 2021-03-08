// API Reasearch de l'application
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Switch } from "react-native";
import Loading from "../functions/Loading";
import styles from "../styleSheet/Style";
import pickerSelectStyles from "../styleSheet/StylePickerSelect";
import PickerSelect from "react-native-picker-select";
import { useTheme } from "@react-navigation/native"; // Thème Dark Mode ou Default Mode
import { SearchBar, Button } from "react-native-elements";

import { getData } from "../functions/FetchFunction"; // Appel de l'API
import {
  ChangeText,
  LimitFirstPage,
  LimitLastPage,
  SelectPage,
} from "../functions/SearchFunction"; // Appel des fonctions de recherche
import { switchType } from "../functions/SwitchFunction";
import { ListPage } from "../functions/Liste"; // Appel des listes de piker
import { Article } from "../functions/Article"; // Mise en page d'Article

export default function MangaAPI() {
  // Recupérer la donnée type dans Anime.js et Manga.js et le transmettre dans url
  // Documentation de l'API https://jikan.docs.apiary.io/#reference/0/anime
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Chargement en boolean (vrai)
  const [search, setSearch] = useState("abc"); // La recherche en string
  const [refreshPage, setRefreshPage] = useState(false); // Lors de la recherche, il nous faut un booléan pour rafraichir la liste des choix d'animés/mangas
  const [page, setPage] = useState(0); // Les pages en int et ensuite convertit en string durant l'appel à l'API
  const [firstPage, setFirstPage] = useState(true); // Booléan vrai pour disabled le bouton previous page
  const [lastPage, setLastPage] = useState(false); // Booléan faux pour enabled le bouton next page
  const [type, setType] = useState("manga"); // Type manga ou anime
  const [switchValue, setSwitchValue] = useState(false); // Booléan pour un switch on et off
  const { colors } = useTheme(); // couleur du thème

  const url =
    "https://kitsu.io/api/edge/" +
    type +
    "?filter%5Btext%5D=" +
    search +
    "&page%5Blimit%5D=10&page%5Boffset%5D=" +
    page;

  useEffect(() => {
    if (isNaN(page)) {
      // Lors de la recherche, la page se transforme en contenu vide
      setPage(0);
    }
    setRefreshPage(true); // Rafraichir l'affichage des articles
    getData(url, setData, setIsLoading); // Ajout des paramètres de la fonction d'API
    setRefreshPage(false);
  }, [search, page, type]); // useEffect se déclanche seulement s'il y a un changement dans search et page

  // Chargez les données
  if (!isLoading) {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { color: colors.text }]}>
          My {type} research
        </Text>
        <SearchBar
          platform={"default"}
          round
          showLoading={refreshPage}
          onCancel
          lightTheme={colors.theme != "dark" ? true : false}
          containerStyle={{ backgroundColor: colors.background }}
          inputContainerStyle={{ backgroundColor: "white" }}
          onChangeText={(text) =>
            ChangeText(text, setPage, setFirstPage, setLastPage, setSearch)
          }
          value={search} // Valeur inscrite sur la barre de recherche
          placeholder="Rechercher votre manga ..."
        />
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
              switchType(value, setSwitchValue, setType, setPage, setFirstPage);
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
        <View style={styles.containerButtonPage}>
          <Button
            title="Précédent"
            buttonStyle={[
              styles.gradientButton,
              { width: 80 },
              !switchValue
                ? { backgroundColor: "#FF7F50" }
                : { backgroundColor: "#87CEEB" },
            ]}
            disabled={firstPage}
            onPress={() => {
              LimitFirstPage(page, setPage, setFirstPage, setLastPage);
            }}
          />
          <PickerSelect
            placeholder={{
              label: "Select a page...",
              value: null,
            }}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) =>
              SelectPage(value, setPage, data, setFirstPage, setLastPage)
            }
            value={page}
            items={ListPage(data)}
            style={pickerSelectStyles}
          />
          <Button
            title="Suivant"
            buttonStyle={[
              styles.gradientButton,
              { width: 80 },
              !switchValue
                ? { backgroundColor: "#FF7F50" }
                : { backgroundColor: "#87CEEB" },
            ]}
            disabled={lastPage}
            onPress={() => {
              LimitLastPage(page, setPage, data, setFirstPage, setLastPage);
            }}
          />
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
    return <Loading />;
  }
}
