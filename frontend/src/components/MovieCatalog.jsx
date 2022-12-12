import React from "react";
import MovieInfo from "./MovieInfo";
import Button from "@mui/material/Button";
import Grade from "@mui/icons-material/Grade";
import { Typography } from "@mui/material";

const MovieCatalog = ({ movie, onAdd }) => {
  return (
    <>
      <MovieInfo movie={movie} />
      <Button
        onClick={() => onAdd(movie._id)}
        sx={{
          background: "yellow",
          height: 64,
          width: 1,
          margin: 0,
          padding: 0,
          borderRadius: 0,
          border: 1,
        }}
      >
        <Typography fontSize={18}>Watch</Typography>
        <Grade sx={{ paddingLeft: 1 }} />
      </Button>
    </>
  );
};

export default MovieCatalog;
