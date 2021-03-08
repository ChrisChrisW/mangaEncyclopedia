// API Upcoming de l'application
import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Loading from "../functions/Loading";
import styles from "../styleSheet/Style";
import pickerSelectStyles from "../styleSheet/StylePickerSelect";

import { useTheme } from "@react-navigation/native"; // Thème Dark Mode ou Default Mode
import { ButtonGroup, Button } from "react-native-elements";
import PickerSelect from "react-native-picker-select";

import {
  LimitFirstPage,
  LimitLastPage,
  ChangeYear,
  SelectPage,
  DifferentSeason,
} from "../functions/SearchFunction"; // Appel des fonctions de recherche
import { getData } from "../functions/FetchFunction"; // Appel de l'API
import { ListPage, ListYear } from "../functions/Liste"; // Appel des listes de piker

import { Article } from "../functions/Article";
import { color } from "react-native-reanimated";

export default function UpcomingMangaAPI() {
  // Recupérer la donnée type dans Anime.js et Manga.js et le transmettre dans url
  // Documentation de l'API https://jikan.docs.apiary.io/#reference/0/anime
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Chargement en boolean (vrai)
  const [refreshPage, setRefreshPage] = useState(false); // Lors de la recherche, il nous faut un booléan pour rafraichir la liste des choix d'animés/mangas
  const [page, setPage] = useState(0); // Les pages en int et ensuite convertit en string durant l'appel à l'API
  const [firstPage, setFirstPage] = useState(true); // Booléan vrai pour disabled le bouton previous page
  const [lastPage, setLastPage] = useState(false); // Booléan faux pour enabled le bouton next page
  const { colors } = useTheme(); // couleur du thème
  const allSeasons = ["Spring", "Summer", "Fall", "Winter"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [season, setSeason] = useState("spring");
  const getYear = new Date().getFullYear(); // Obtenir l'année actuelle
  const [year, setYear] = useState(getYear + 1); // Récuperer l'année actuelle par default

  const url =
    "https://kitsu.io/api/edge/anime?filter%5Bseason%5D=" +
    season +
    "&filter%5BseasonYear%5D=" +
    year +
    "&page%5Blimit%5D=10&page%5Boffset%5D=" +
    page;

  useEffect(() => {
    if (isNaN(page)) {
      // Lors de la recherche, la page se transforme en contenu vide
      setPage(0);
    }
    setRefreshPage(true); // Rafraichir l'affichage des articles
    getData(url, setData, setIsLoading); // Ajout des paramètres de la fonction d'API (FetchFunction.js)
    setRefreshPage(false);
  }, [season, year, page]); // Vide pour que useEffect tourne qu'une seul fois ses fonctions

  if (!isLoading) {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { color: colors.text }]}>
          Upcoming {season} {year}
        </Text>
        <Text style={{ color: colors.text, margin: 10 }}>Year :</Text>
        <PickerSelect
          placeholder={{
            label: "Select a year...",
            value: null,
          }}
          useNativeAndroidPickerStyle={false}
          onValueChange={(value) =>
            ChangeYear(value, setYear, setPage, setFirstPage, setLastPage)
          }
          value={year}
          items={ListYear(getYear)}
          style={pickerSelectStyles}
        />
        <Text style={{ color: colors.text, margin: 10 }}>Season :</Text>
        <ButtonGroup
          buttons={allSeasons}
          selectedIndex={selectedIndex}
          buttonStyle={{ backgroundColor: "#aaaaaa" }}
          onPress={(value) =>
            DifferentSeason(
              value,
              setSelectedIndex,
              setSeason,
              setPage,
              setFirstPage,
              setLastPage
            )
          }
          selectedButtonStyle={{ backgroundColor: "#87CEFA" }}
          containerStyle={{ backgroundColor: colors.background }}
          //containerStyle={{ height: 100 }}
        />
        <View style={styles.containerButtonPage}>
          <Button
            title="Précédent"
            buttonStyle={[
              styles.gradientButton,
              { width: 80, backgroundColor: "#87CEEB" },
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
              { width: 80, backgroundColor: "#87CEEB" },
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
