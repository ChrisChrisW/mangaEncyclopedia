import { Alert, Vibration } from "react-native";
import { Linking } from "react-native";

// Fonction qui alerte l'user qu'il est soit à la première ou à la dernière page
export function AlertMsg($message) {
  Vibration.vibrate();
  Alert.alert("Alert", $message);
}
// Fonction qui demande à l'user s'il veut être redirigé vers Youtube
export function LinkYoutube(route) {
  Alert.alert(
    "Redirection",
    "you will be redirected to Youtube",
    [
      {
        text: "Cancel",
        // onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () =>
          Linking.openURL(
            "https://www.youtube.com/watch?v=" + route.params.youtube_id
          ),
      },
    ],
    { cancelable: false }
  );
}
// Fonction qui demande à l'user s'il veut être redirigé vers les différents réseaux
export function LinkSocialMedia(link) {
  Alert.alert(
    "Redirection",
    "you will be redirected to another application",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => Linking.openURL(link),
      },
    ],
    { cancelable: false }
  );
}
