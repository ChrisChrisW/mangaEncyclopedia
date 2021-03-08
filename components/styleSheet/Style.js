// Style principal
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  // Logo de l'application
  logo: {
    width: 30,
    height: 30,
    marginLeft: 20,
    resizeMode: "contain",
  },
  // Mise en page des pages dans screens
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  marge: {
    marginLeft: 30,
    marginRight: 30,
  },
  // Mise en page de la page Detail dans screens
  center: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  imgDetail: {
    width: 300,
    height: 300,
    resizeMode: "stretch",
    borderRadius: 5,
  },
  type: {
    textAlign: "center",
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  titles: {
    fontFamily: "CatCafe",
    fontSize: 21,
    borderBottomWidth: 2,
    marginTop: 10,
    marginBottom: 20,
  },
  mangaDescription: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  flatList: {
    width: 300,
    flexDirection: "column",
  },
  synopsis: {
    textAlign: "justify",
  },
  // Mise en page de la page MangaAPI, TopMangaAPI dans API
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  load: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "CatCafe",
    textAlign: "left",
    margin: 10,
    //fontWeight: "bold",
    fontSize: 26,
  },
  containerSwitch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  containerButtonPage: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  // Mise en page de l'Article
  containerArticle: {
    height: 350,
    margin: 20,
    marginTop: 50,
  },
  status: {
    width: 100,
    borderRadius: 5,
    position: "absolute",
    bottom: -20,
    textAlign: "center",
    fontFamily: "CatCafe",
    backgroundColor: "#32CD32",
  },
  Finishedstatus: {
    width: 100,
    borderRadius: 5,
    position: "absolute",
    bottom: -20,
    right: 0,
    textAlign: "center",
    fontFamily: "CatCafe",
    backgroundColor: "#d80000",
  },
  ranking: {
    width: 80,
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 18,
    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.7)",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  titleArticle: {
    width: 300,
    height: 50,
    padding: 10,
    position: "absolute",
    bottom: 0,
    fontSize: 14,
    textAlign: "left",
    fontFamily: "CatCafe",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.7)",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  img: {
    zIndex: -1,
    resizeMode: "stretch",
    width: 300,
    height: 300,
    borderRadius: 5,
  },
  gradientButton: {
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
