/*
TODO
1.  break up into components
2. fetching handlers services?
3. drill down into view? have this as list. some navigation
*/
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  Image,
} from "react-native";
import Constants from "expo-constants";

const SCALE = 4;
const THUMBNAIL_WIDTH = 500 / SCALE;
const THUMBNAIL_HEIGHT = 750 / SCALE;

export default function App() {
  const [results, setResults] = React.useState(null);
  const [genres, setGenres] = React.useState(null);

  React.useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1"
      );
      const res = await response.json();

      setResults(res.results);
    };

    const fetchGenres = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US"
      );
      const res = await response.json();

      setGenres(res.genres);
    };

    fetchResults();
    fetchGenres();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {results ? (
          results.map(({ title, poster_path, genre_ids }) => (
            <View style={styles.row} key={title}>
              <Image
                source={{
                  uri: `http://image.tmdb.org/t/p/w500/${poster_path}`,
                }}
                style={{
                  width: THUMBNAIL_WIDTH,
                  height: THUMBNAIL_HEIGHT,
                }}
              />
              <View style={styles.content}>
                <Text style={styles.film}>{title}</Text>
                {genres && (
                  <View style={styles.genres}>
                    {genre_ids.map((genre_id) =>
                      genres
                        .filter(({ id }) => genre_id === id)
                        .map(({ name }) => <Text key={name}>{name}</Text>)
                    )}
                  </View>
                )}
              </View>
            </View>
          ))
        ) : (
          <Text>Loading...</Text>
        )}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  row: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 25,
    marginHorizontal: 20,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  genres: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  film: {
    padding: 30,
    width: "100%",
  },
});
