// Style du Picker (Button Select)
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingLeft: 10,
    paddingRight: 35, // pour s'assurer que le texte ne soit pas derrière l'icone
    marginLeft: 10,
    marginRight: 10,
  },
  inputAndroid: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    color: "black",
    backgroundColor: "rgba(255,255,255,0.3)",
    paddingLeft: 10,
    paddingRight: 35, // pour s'assurer que le texte ne soit pas derrière l'icone
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    color: "black",
    backgroundColor: "rgba(255,255,255,0.3)",
    paddingLeft: 10,
    paddingRight: 35, // pour s'assurer que le texte ne soit pas derrière l'icone
    marginLeft: 10,
    marginRight: 10,
  },
});
