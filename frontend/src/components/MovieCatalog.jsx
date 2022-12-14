import React from "react";
import MovieInfo from "./MovieInfo";
import Button from "@mui/material/Button";
import {Grade, PlayArrow} from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const MovieCatalog = ({ movie, onAdd }) => {
  return (
    <>
      <MovieInfo movie={movie} />
      <Grid container sx={{justifyContent: 'center'}}>
      <Grid item xs={5} sx={{margin:1}}>
      <Button
        onClick={() => onAdd(movie._id)}
        sx={{
          background: "#0B2361",
          height: 50,
          width: 1,
          margin: 0,
          padding: 0,
          borderRadius: 3,
          border: 1,
        }}
      >
        <Typography fontSize={18} sx={{color: "#E9ECF4"}}>Watch</Typography>
        <PlayArrow sx={{ paddingLeft: 1, color: "#E9ECF4" }}/>
      </Button>

      </Grid>

      <Grid item xs={5} sx={{margin:1}}>
      <Button
        onClick={() => onAdd(movie._id)}
        sx={{
          background: "#0B2361",
          height: 50,
          width: 1,
          margin: 0,
          padding: 0,
          borderRadius: 3,
          border: 1,
        }}
      >
        <Typography fontSize={18} sx={{color: "#E9ECF4"}}>Add </Typography>
        <Grade sx={{ paddingLeft: 1, color: "#E9ECF4" }}/>
      </Button>
      </Grid>
      </Grid>
    </>
  );
};

export default MovieCatalog;
