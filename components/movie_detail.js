import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

function MovieDetail(props) {  
    
    const movie = props.navigation.getParam('movie', null)
    
    return (
        <View>
            <Text>{movie.title}</Text>
            <Text>{movie.genre}</Text>
            <Text>{movie.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
  },
});

export { MovieDetail };