// Page d'Accueil
import React from "react";
import { SafeAreaView, View, Text, Switch, ScrollView } from "react-native";
import styles from "../styleSheet/Style";

import { SearchBar, SocialIcon, ButtonGroup } from "react-native-elements";
import { LinkSocialMedia } from "../functions/Alerte"; // Alerte pour confirmer le passage de l'application vers un autre site / app
import PickerSelect from "react-native-picker-select";

import { useTheme } from "@react-navigation/native"; // Thème Dark Mode ou Default Mode

export default function Promo() {
  const { colors } = useTheme(); // couleur du thème
  const containButtonGroup = ["1", "2", "3", "4"];

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.marge}>
          <Text style={[styles.title, { color: colors.text }]}>
            Descriptif global de l'application
          </Text>
          <Text style={[styles.synopsis, { color: colors.text }]}>
            L'application te montre tous les mangas et animes disponibles. Elle
            fait pour les amateurs ou passionnés d'animations japonaises qui
            souhaitent lire/regarder des mangas/animés qui n'ont pas vus/lus.
            Elle est aussi pour les gens qui sont curieux et qui souhaitent
            découvrir cette univers.
          </Text>
          <Text style={[styles.synopsis, { color: colors.text }]}>
            Dans l'application, il sera possible de chercher par soi-même sur la
            page Search si on sait ce qu'on le cherche et sinon on peut se
            référer à la page Genre pour trouver à partir de nos goûts
            personnels.
          </Text>
          <Text style={[styles.synopsis, { color: colors.text }]}>
            Si vous êtes curieux sur la sortie des nouveaux animes, vous pouvez
            aller sur la rubrique Upcoming pour voir les nouveautés et les
            prochaines nouveautés.
          </Text>
          <Text style={[styles.title, { color: colors.text }]}>API</Text>
          <View>
            <Text style={[styles.synopsis, { color: colors.text }]}>
              J'utilise cette API parce qu'elle possède une grande bibliothèque
              de données sur les mangas et les animes. Il est donc parfait de
              l'utiliser en appelant les différents données comme le titre, la
              description, sa tendance, une image, son genre, sa date de
              publication et de fin, ...
            </Text>
            <SocialIcon
              type="google"
              button
              title="Lien vers la doc de l'API Kitusu"
              onPress={() => LinkSocialMedia("http://kitsu.docs.apiary.io")}
            />
          </View>
          <Text style={[styles.title, { color: colors.text }]}>
            Les plugins
          </Text>
          <Text style={[styles.synopsis, { color: colors.text }]}>
            L'application fait usage des plugins de Vibration, d'Alerte, de
            Linking pour se rediriger vers les différents sites, d'un Overlay et
            de la fonctionnalité Dark Mode. Si vous avez configurés votre
            appareil en mode Nuit le fond deviendra Noir et le texte en Blanc et
            inversement en mode Jour. Pour la Vibration, il faut aller sur les
            pages de recherches et changer de page, quand on est sur la page de
            départ ou sur la dernière page la vibration demarre.
          </Text>
          <Text style={[styles.title, { color: colors.text }]}>
            Les components
          </Text>
          <View>
            <Text style={[styles.synopsis, { color: colors.text }]}>
              La barre de recherche
            </Text>
            <SearchBar
              platform={"default"}
              round
              placeholder="Rechercher ..."
            />
          </View>
          <View>
            <Text style={[styles.synopsis, { color: colors.text }]}>
              Un switch
            </Text>
            <Switch />
          </View>
          <View>
            <Text style={[styles.synopsis, { color: colors.text }]}>
              Un select
            </Text>
            <PickerSelect items={{ label: "Rien", value: "Rien" }} />
          </View>
          <View>
            <Text style={[styles.synopsis, { color: colors.text }]}>
              Des buttons groupés
            </Text>
            <ButtonGroup buttons={containButtonGroup} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
