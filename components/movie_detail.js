import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import {API} from '../api_service'

function MovieDetail(props) {
  
  const token = '77903b7a33ad265d3d2cc903e74e423bb19eae22';

  const movie = props.navigation.getParam('movie', null)
  
  const [rating, setRating] = useState(0);

  const rateClicked = () => {
    if (rating>0 && rating<6){
      API.rateMovie(token, movie.id, rating)
      .then(resp => {
        setRating(0);
        Alert.alert(resp.message);
      })
      .catch(error => Alert.alert(error.message))
    }
  }
    
  return (
      <View style={styles.container}>
          <Text style={styles.titleFont}>{movie.title}</Text>
          <Text style={styles.genreFont}>{movie.genre}</Text>
          <Text style={styles.descriptionFont}>{movie.description}</Text>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={ faStar } style={movie.average_rating>0 ? styles.avg_rating : styles.avg_rating_null} size={ 25 }/>
            <FontAwesomeIcon icon={ faStar } style={movie.average_rating>1 ? styles.avg_rating : styles.avg_rating_null} size={ 25 }/>
            <FontAwesomeIcon icon={ faStar } style={movie.average_rating>2 ? styles.avg_rating : styles.avg_rating_null} size={ 25 }/>
            <FontAwesomeIcon icon={ faStar } style={movie.average_rating>3 ? styles.avg_rating : styles.avg_rating_null} size={ 25 }/>
            <FontAwesomeIcon icon={ faStar } style={movie.average_rating>4 ? styles.avg_rating : styles.avg_rating_null} size={ 25 }/>
            <Text style={styles.avg_rating_null}>({movie.number_of_ratings})</Text>
          </View>

          <View style={{borderTopColor: 'white', borderTopWidth: 2, paddingTop: 8}} />
          <Text style={styles.avg_rating_null}>Rate It!</Text>

          <View style={styles.iconRateContainer}>
            <FontAwesomeIcon icon={ faStar } style={rating>0 ? styles.rated : styles.not_rated} size={ 48 } onPress={() => setRating(1)}/>
            <FontAwesomeIcon icon={ faStar } style={rating>1 ? styles.rated : styles.not_rated} size={ 48 } onPress={() => setRating(2)}/>
            <FontAwesomeIcon icon={ faStar } style={rating>2 ? styles.rated : styles.not_rated} size={ 48 } onPress={() => setRating(3)}/>
            <FontAwesomeIcon icon={ faStar } style={rating>3 ? styles.rated : styles.not_rated} size={ 48 } onPress={() => setRating(4)}/>
            <FontAwesomeIcon icon={ faStar } style={rating>4 ? styles.rated : styles.not_rated} size={ 48 } onPress={() => setRating(5)}/>
          </View>
          <Button title='Rate' onPress={() => rateClicked()}/>
      </View>
  );
}

// This type of navigation styling is for function based components
MovieDetail.navigationOptions = screenProps => ({
  title: screenProps.navigation.getParam('title'),
  headerStyle: {
    backgroundColor: 'orange'
  },
  headerTintColor: '#fff',
  headerRight: () => <Button title='Edit' color='orange' 
    onPress={() => screenProps.navigation.navigate("Edit", {movie: screenProps.navigation.getParam('movie'), title: screenProps.navigation.getParam('title')})}/>
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    padding: 13,
  },
  descriptionFont: {
    color: '#ffcccc',
    fontSize: 20,
    paddingTop: 7
  },
  genreFont: {
    color: '#ffccee',
    fontSize: 13,
  },
  titleFont: {
    color: 'white',
    fontSize: 35,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 8
  },
  iconRateContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 8
  },
  avg_rating: {
    color: '#FFA500',
    fontSize: 26,
  },
  avg_rating_null: {
    color: 'white',
    fontSize: 25,
  },
  rated: {
    color: '#008000',
    fontSize: 26,
  },
  not_rated: {
    color: '#C0C0C0',
    fontSize: 25,
  },
});

export { MovieDetail };