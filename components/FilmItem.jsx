import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import GenreList from "./GenreList";

const SCALE = 4;

const THUMBNAIL_WIDTH = 500 / SCALE;
const THUMBNAIL_HEIGHT = 750 / SCALE;

const FilmItem = ({ title, genres, genreIds, posterPath }) => (
  <View style={styles.row} key={title}>
    <Image
      source={{
        uri: `http://image.tmdb.org/t/p/w500/${posterPath}`,
      }}
      style={styles.coverImage}
    />
    <View style={styles.content}>
      <Text style={styles.film}>{title}</Text>
      {genres && <GenreList genres={genres} genreIds={genreIds} />}
    </View>
  </View>
);

FilmItem.propTypes = {};

const styles = StyleSheet.create({
  row: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    marginBottom: 25,
  },
  content: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  film: {
    flex: 1,
    flexWrap: "wrap",
  },
  coverImage: {
    width: THUMBNAIL_WIDTH,
    height: THUMBNAIL_HEIGHT,
    marginRight: 20,
  },
});

export default FilmItem;
