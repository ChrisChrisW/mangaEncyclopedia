// Page de Contact
import React from "react";
import styles from "../styleSheet/Style";
import { SafeAreaView, Text } from "react-native";

import { SocialIcon } from "react-native-elements";
import { useTheme } from "@react-navigation/native"; // Thème Dark Mode ou Default Mode

import { LinkSocialMedia } from "../functions/Alerte"; // Alerte pour confirmer le passage de l'application vers un autre site / app
import { View } from "react-native";

export default function Contact() {
  const { colors } = useTheme(); // couleur du thème

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Links</Text>
      <View style={styles.screenContainer}>
        <View style={{ flexDirection: "row" }}>
          <SocialIcon
            raised={false}
            type="envelope"
            onPress={() =>
              LinkSocialMedia(
                "mailto:cours.christophewang@gmail.com?subject=Message venant de l'application&body=Mon message"
              )
            }
          />
          <SocialIcon
            raised={false}
            type="linkedin"
            onPress={() =>
              LinkSocialMedia(
                "https://fr.linkedin.com/in/christophe-wang-39a845182"
              )
            }
          />
          <SocialIcon
            raised={false}
            type="stack-overflow"
            onPress={() =>
              LinkSocialMedia("https://stackoverflow.com/users/14819620/chugo")
            }
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <SocialIcon
            button
            type="gitlab"
            title="GitLab"
            onPress={() =>
              LinkSocialMedia("https://gitlab.com/ChrisChrisW/reactjs_lp")
            }
            style={{ width: 150 }}
          />
          <SocialIcon
            button
            type="github"
            title="GitHub"
            onPress={() => LinkSocialMedia("https://github.com/ChrisChrisW")}
            style={{ width: 150 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
