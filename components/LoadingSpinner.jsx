// problem. doesn't display on android...
import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const LoadingSpinner = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" />
  </View>
);

export default LoadingSpinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
