/*
TODO
1.  break up into components
2. fetching handlers services?
3. drill down into view? have this as list. some navigation
*/
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet, Text, ScrollView, SafeAreaView,
} from "react-native";
import Constants from "expo-constants";

import FilmItem from "./components/FilmItem";

export default function App() {
  const [results, setResults] = React.useState(null);
  const [genres, setGenres] = React.useState(null);

  React.useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1",
      );
      const res = await response.json();

      setResults(res.results);
    };

    const fetchGenres = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US",
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
          // TODO - map these in API methods
          results.map(
            ({ title, poster_path: posterPath, genre_ids: genreIds }) => (
              <FilmItem
                key={title}
                title={title}
                posterPath={posterPath}
                genreIds={genreIds}
                genres={genres}
              />
            ),
          )
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
});
