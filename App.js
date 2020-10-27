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

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1"
      );
      const res = await response.json();

      setResults(res.results);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {results ? (
          results.map(({ title, poster_path }) => (
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
              <Text style={styles.film}>{title}</Text>
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
  },
  scrollView: {
    // marginHorizontal: 20,
  },
  film: {
    padding: 30,
    width: "100%",
  },
});
