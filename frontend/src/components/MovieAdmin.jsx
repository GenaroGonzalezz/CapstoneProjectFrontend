import React from "react";
import Stack from "@mui/system/Stack";
import MovieInfo from "./MovieInfo";
import { Grid, Typography, Button } from "@mui/material";

const MovieAdmin = ({ movie, handleOnEdit, handleOnDelete }) => {
  return (
    <>
      <MovieInfo movie={movie} />
      <Stack direction="row">
      <Button
          onClick={() => handleOnEdit(movie)}
          sx={{
          background: "#E9ECF4",
          height: 50,
          width: 0.9,
          margin: 1,
          padding: 0,
          borderRadius: 3,
          border: 1,
          boxShadow: 2
        }}
      >
        <Typography fontSize={18} sx={{color: "black"}}>Edit</Typography>
        {/* <PlayArrow sx={{ paddingLeft: 1, color: "#E9ECF4" }}/> */}
      </Button>

       

      <Button
          onClick={() => handleOnDelete(movie._id)}
          sx={{
          background: "#E9ECF4",
          height: 50,
          width: 1,
          margin: 1,
          padding: 0,
          borderRadius: 3,
          border: 1,
          boxShadow: 2

        }}
      >
        <Typography fontSize={18} sx={{color: "black"}}>Delete</Typography>
        {/* <PlayArrow sx={{ paddingLeft: 1, color: "#E9ECF4" }}/> */}
      </Button>
        
      </Stack>
    </>
  );
};

export default MovieAdmin;
