import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GenreList = ({ genres, genreIds }) => {
  const genreString = genreIds
    .map((genreId) =>
      genres.filter(({ id }) => genreId === id).map(({ name }) => name)
    )
    .join(", ");
  return <Text style={styles.genres}>{genreString}</Text>;
};

GenreList.propTypes = {};

export default GenreList;

const styles = StyleSheet.create({
  genres: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
