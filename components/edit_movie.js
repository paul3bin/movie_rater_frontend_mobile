import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'

function EditMovie(props) {  
    
    const movie = props.navigation.getParam('movie', null)
    
    return (
        <View style={styles.container}>
            <Text>Edit {movie.title}</Text>
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
});

export { EditMovie };