import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API } from '../api_service'
import { TouchableOpacity } from 'react-native-gesture-handler';

let token = null;

function MovieList(props) {
  
  const [movies, setMovies] = useState([]);

  const getToken = async () =>{
    token = await AsyncStorage.getItem('token')
    if (token){
      fetchMovies();
    } 
    else{
      props.navigation.navigate('Authentication')
    }
  }
  
  useEffect(() => {
    getToken();
  },[])

  const fetchMovies = () => {
    console.log(token)
    API.getMovies(token)
    .then(resp => setMovies(resp))
    .catch(error => console.log(error))
  }

  const movieClicked = (movie) =>{
    props.navigation.navigate("Detail", {movie: movie, title: movie.title, token: token})
  }

  return (
    <View style={styles.container}>
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
      <Button title='Add Movie' color='orange' 
        onPress={() => props.navigation.navigate("Edit", {movie: {title: '', genre: '', description: ''}, 
        token: token})}/>
    </View>
  );
}

MovieList.navigationOptions = screenProps => ({
  title: 
    <View style={styles.headerBar}>
      <FontAwesomeIcon icon={ faFilm } style={styles.headerIcon}/>
      <Text style={styles.headerTitle}>Movie Rater</Text>
    </View>,
  headerStyle: {
    backgroundColor: 'orange',
  },
  headerRight: () => <Button title='Logout' color='orange' 
    onPress={async () => AsyncStorage.removeItem('token'), token=null,() => screenProps.navigation.navigate("Authentication")}/>,
});

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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  headerTitle: {
    fontSize: 20,
    color: 'white'
  },
  headerIcon: {
    transform: [{rotateZ: '-20deg'}],
    paddingHorizontal: 13,
    fontSize: 20,
    color: 'white'
  }
});

export { MovieList };