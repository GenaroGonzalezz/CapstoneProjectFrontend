import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// Own
import AdminPage from './pages/AdminPage';
import Catalog from './pages/Catalog';
import Navbar from './components/Navbar';
import { getMovies } from './api/moviesApi';
import MovieDetails from './pages/MovieDetails';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  useEffect(() => {
    getAllMovies()
  }, [])

  const getAllMovies = async () => {
    const movies = await getMovies();
    setAllMovies(movies);
    // console.log(movies);
  }

  const favMovieQty = favMovies
    .map((fm) => fm.qty)
    .reduce((prev, curr) => prev + curr, 0);

  const onAdd = (id) => {
    const movie = allMovies.find((m) => m._id === id);
    const tempFavMovies = Array.from(favMovies);
    const currentMovieIndex = tempFavMovies.findIndex((m) => m._id === id);

    if (currentMovieIndex >= 0)
      tempFavMovies[currentMovieIndex] = {
        ...tempFavMovies[currentMovieIndex],
        qty: tempFavMovies[currentMovieIndex].qty + 1,
      };
    else tempFavMovies.push({ ...movie, qty: 1 });

    setFavMovies(tempFavMovies);
  };


  return (

    <Fragment>
      <Navbar favMovieQty={0} />
      <Routes>

        <Route
          path="/admin"
          element={
            <AdminPage
              allMovies={allMovies}
              setAllMovies={setAllMovies}
            />
          }
        />
        <Route
          path="/"
          element={
            <Catalog
              movies={allMovies}
              onAdd={onAdd} />}
        />

        <Route
          path="/details"
          element={
            <MovieDetails
            />
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
