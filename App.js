import React, {useState, useEffect} from 'react';
import { MovieList } from './components/list_movies'

export default function App() {

  const [movies, setMovies] = useState([]);

  return (
    <MovieList />
  );
}