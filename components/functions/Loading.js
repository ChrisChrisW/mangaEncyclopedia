import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "../styleSheet/Style";

export default function Loading() {
  return (
    <View style={styles.load}>
      <ActivityIndicator size="large" />
    </View>
  );
}
