import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { UserAuthentication } from './components/user_auth';
import { MovieList } from './components/list_movies';
import { MovieDetail } from './components/movie_detail';
import { EditMovie } from './components/edit_movie';

const AppNavigator = createStackNavigator({
  Authentication: {screen: UserAuthentication},
  List: {screen: MovieList},
  Detail: {screen: MovieDetail},
  Edit: {screen: EditMovie}
})

const App = createAppContainer(AppNavigator);

export default App;