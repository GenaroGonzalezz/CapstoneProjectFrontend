import React from "react";
import Grid from "@mui/material/Grid";
import MovieAdmin from "./MovieAdmin";

const MovieListAdmin = ({ movies, handleOnEdit, handleOnDelete }) => {
  if (movies.length === 0) {
    console.log('vacio');
    return null;
  }
  console.log("entra");
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {movies.map((movie) => {
          return (
            <Grid item sx={{ marginTop: 2, alignSelf: 'center' }} xs={12} sm={6} md={4} key={movie._id}>
              <MovieAdmin
                movie={movie}
                handleOnEdit={handleOnEdit}
                handleOnDelete={handleOnDelete}
              />
            </Grid>
          );
        })}
      </Grid>

    </>
  );
};

export default MovieListAdmin;
