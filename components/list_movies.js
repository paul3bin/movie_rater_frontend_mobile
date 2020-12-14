import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

import { API } from '../api_service'
import { TouchableOpacity } from 'react-native-gesture-handler';

function MovieList(props) {
  
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    API.getMovies('77903b7a33ad265d3d2cc903e74e423bb19eae22')
    .then(resp => setMovies(resp))
    .catch(error => console.log(error))
  }, [])

  const movieClicked = (movie) =>{
    props.navigation.navigate("Detail", {movie: movie})
  }

  return (
    <View style={styles.container}>

      <View style={styles.headerBar}>
        <FontAwesomeIcon icon={ faFilm } style={styles.headerIcon} size={ 28 }/>
        <Text style={styles.headerTitle}>Movie Rater</Text>
      </View>

      <FlatList 
        data={movies}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => movieClicked(item)}>
            <View style={styles.item}>
              <Text key={item.id} style={styles.itemTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
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
    flex: 2,
    padding: 10,
    height: 50,
    backgroundColor: '#282C35',
  },
  itemTitle: {
    color: '#fff',
    fontSize: 24, 
  },
  headerBar: {
    flex: 0.25,
    backgroundColor: '#282C35',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  headerTitle: {
    color: '#FFA500',
    fontSize: 40,
  },
  headerIcon: {
    color: 'coral',
    transform: [{rotateZ: '-20deg'}],
    paddingHorizontal: 19,
  }
});

export { MovieList };