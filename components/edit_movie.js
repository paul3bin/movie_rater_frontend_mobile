import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

import { API } from '../api_service'

function EditMovie(props) {  
    
    const token = '77903b7a33ad265d3d2cc903e74e423bb19eae22';

    const movie = props.navigation.getParam('movie', null)

    const [title, setTitle] = useState(movie.title);
    const [genre, setGenre] = useState(movie.genre);
    const [description, setDescription] = useState(movie.description);

    // editing the movie, saving the changes and bringing back the changes to the previous screen to display
    const saveMovie = () => {
        API.editMovie(token, movie.id, {title: title, genre: genre, description: description})
            .then(movie => props.navigation.navigate("Detail", {movie: movie, title: movie.title}))
            .catch(error => console.log(error))
        props.navigation.goBack();
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput 
                style={styles.input}
                placeholder="Title"
                onChangeText = {text => setTitle(text)}
                value = {title}
            />
            <Text style={styles.label}>Genre</Text>
            <TextInput 
                style={styles.input}
                placeholder="Genre"
                onChangeText = {text => setGenre(text)}
                value = {genre}
            />
            <Text style={styles.label}>Description</Text>
            <TextInput 
                style={styles.input}
                placeholder="Description"
                onChangeText = {text => setDescription(text)}
                value = {description}
            />

            <Button onPress={() => saveMovie()} title="Save"/> 
        </View>
    );
}

// This type of navigation styling is for function based components
EditMovie.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('title'),
  headerStyle: {
    backgroundColor: 'orange'
  },
  headerTintColor: '#fff',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    padding: 13,
  },
  label: {
      fontSize: 24,
      color: 'white',
  },
  input: {
      fontSize: 24,
      padding: 10,
      margin: 10,
      backgroundColor: 'white',
  },
});

export { EditMovie };