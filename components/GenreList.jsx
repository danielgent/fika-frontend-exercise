import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GenreList = ({ genres, genreIds }) => {
  const filmGenres = genreIds.map((genreId) =>
    genres.filter(({ id }) => genreId === id).map(({ name }) => name)
  );
  return (
    <View style={styles.wrapper}>
      {filmGenres.map((g, idx) => {
        const isLast = idx === filmGenres.length - 1;
        return <Text key={g}>{`${g}${!isLast && ","}`}</Text>;
      })}
    </View>
  );
};

GenreList.propTypes = {};

export default GenreList;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
