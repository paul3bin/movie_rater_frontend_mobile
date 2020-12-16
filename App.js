import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { MovieList } from './components/list_movies'
import { MovieDetail } from './components/movie_detail'
import { EditMovie } from './components/edit_movie'

const AppNavigator = createStackNavigator({
  List: {screen: MovieList},
  Detail: {screen: MovieDetail},
  Edit: {screen: EditMovie}
})

const App = createAppContainer(AppNavigator);

export default App;