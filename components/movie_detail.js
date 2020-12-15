import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function MovieDetail(props) {  
    
    const movie = props.navigation.getParam('movie', null)
    
    return (
        <View style={styles.container}>
            <Text style={styles.fontdetails}>{movie.title}</Text>
            <Text style={styles.fontdetails}>{movie.genre}</Text>
            <Text style={styles.fontdetails}>{movie.description}</Text>
            <View style={styles.iconContainer}>
              <FontAwesomeIcon icon={ faStar } style={movie.average_rating>0 ? styles.avg_rating : styles.avg_rating_null} size={ 25 }/>
              <FontAwesomeIcon icon={ faStar } style={movie.average_rating>1 ? styles.avg_rating : styles.avg_rating_null} size={ 25 }/>
              <FontAwesomeIcon icon={ faStar } style={movie.average_rating>2 ? styles.avg_rating : styles.avg_rating_null} size={ 25 }/>
              <FontAwesomeIcon icon={ faStar } style={movie.average_rating>3 ? styles.avg_rating : styles.avg_rating_null} size={ 25 }/>
              <FontAwesomeIcon icon={ faStar } style={movie.average_rating>4 ? styles.avg_rating : styles.avg_rating_null} size={ 25 }/>
              <Text style={styles.avg_rating_null}>({movie.number_of_ratings})</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fontdetails: {
    color: 'white',
    fontSize: 25,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  avg_rating: {
    color: '#FFA500',
    fontSize: 26,
  },
  avg_rating_null: {
    color: 'white',
    fontSize: 25,
  }
});

export { MovieDetail };