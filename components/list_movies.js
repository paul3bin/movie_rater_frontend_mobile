import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { API } from '../api_service'

function MovieList() {
  
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    API.getMovies('77903b7a33ad265d3d2cc903e74e423bb19eae22')
    .then(resp => setMovies(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data={movies}
        renderItem={({item}) => (
            <View style={styles.item}>
              <Text key={item.id} style={styles.itemTitle}>{item.title}</Text>
            </View>
        )}
        // providing another property for the flatlist.
        // specifying what would be the item id for the item.
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    flex: 1,
    padding: 10,
    height: 50,
    backgroundColor: '#282C35',
  },
  itemTitle: {
    color: '#fff',
    fontSize: 24, 
  },
});

export { MovieList };