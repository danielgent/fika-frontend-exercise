import React from "react";
import { Text, View, StyleSheet } from "react-native";

const GenreList = ({ genres, genreIds }) => {
  const filmGenres = genreIds.map((genreId) =>
    genres.filter(({ id }) => genreId === id).map(({ name }) => name)
  );
  // TODO - no idea how to make this constrained inside page and wrap!
  return (
    <View style={styles.wrapper}>
      {filmGenres.map((g, idx) => {
        const isLast = idx === filmGenres.length - 1;
        return (
          <Text styles={styles.text} key={g}>
            {`${g}${!isLast ? "," : ""}`}
          </Text>
        );
      })}
    </View>
  );
};

GenreList.propTypes = {};

export default GenreList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // does nothing
    // flexDirection: "row",
    // flexWrap: "wrap",
    flexDirection: "column",
    flexShrink: 1,
  },
  text: {
    flex: 1,
  },
});
