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
            <View>
              <Text key={item.id}>{item.title}</Text>
            </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { MovieList };