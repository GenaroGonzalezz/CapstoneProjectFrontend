import React from "react";
import Grid from "@mui/material/Grid";
import MovieCatalog from "./MovieCatalog";
import Carousel from 'react-material-ui-carousel'
import Item from '../components/Item';

const MovieListCatalog = ({ movies, onAdd }) => {
  if (movies.length === 0) {
    return null;
  }


  return (
    <>
    
    <Grid container spacing={2}>
      {movies.map((movie) => {
        return (
          <Grid item xs={12} sm={6} md={4} key={movie._id}>
            <MovieCatalog movie={movie} onAdd={onAdd} />
          </Grid>
        );
      })}
    </Grid>
    
    {/* <Grid container sx={{width: '100%', height: '50%'}}>
    <Carousel>
            {
                movies.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    </Grid> */}

    </>
  );
};

export default MovieListCatalog;
