import React, { Fragment, useState } from "react";
import Grid from "@mui/material/Grid";
import MovieCatalog from "./MovieCatalog";
import Carousel from 'react-material-ui-carousel'
import Item from '../components/Item';
import Buttons from "./Buttons";
import { Card } from "@mui/material";



const MovieListCatalog = ({ movies, onAdd }) => {
  const [movie, setMovie] = useState(movies);

  if (movies.length === 0) {
    return null;
  }


  const catalogMovies = [...new Set(movies.map((Val) => Val.genre))];
  const filterMovie = (curgenre) => {
    const newMovie = movies.filter((mov) => {
      return mov.genre === curgenre;
    });
    setMovie(newMovie);
  };

  return (
    <div>
      {/* <Card sx={{ backgroundColor: "#E9ECF4", width: '120%' , height: "100%", borderRadius: 3, margin: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}> */}

        <Buttons
          filterMovie={filterMovie}
          setMovie={setMovie}
          catalogMovies={catalogMovies}
          movies={movies}
        />
        <Grid container spacing={4}>
          {
            movie.map((Val) => {
              return (
                <>
                  <Grid item sx={{ marginTop: 2, alignSelf: 'center' }} xs={12} sm={6} md={3} key={movie._id}>
                    <MovieCatalog movie={Val} onAdd={onAdd} />
                  </Grid>
                </>
              );
            })
          }
        </Grid>

      {/* </Card> */}


    </div>
  );
};

export default MovieListCatalog;
