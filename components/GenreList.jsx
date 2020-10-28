import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GenreList = ({ genres, genreIds }) => (
  <View style={styles.genres}>
    {genreIds.map((genreId) => genres
      .filter(({ id }) => genreId === id)
      .map(({ name }) => <Text key={name}>{name}</Text>))}
  </View>
);

GenreList.propTypes = {};

export default GenreList;

const styles = StyleSheet.create({
  genres: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});
