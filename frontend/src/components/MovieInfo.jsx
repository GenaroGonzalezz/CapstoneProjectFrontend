import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography, Chip, Grid } from '@mui/material';
import { Link, useNavigate, NavLink } from "react-router-dom";


const MovieInfo = ({ movie }) => {
const navigate = useNavigate();

const handleDetail = (movieId) => {
  navigate('/details', {state: {movie}});
}
  return (
    <Box
    
    sx={{ backgroundColor: "#E9ECF4", height: "100%", border: 3, borderRadius: 3 }}>
        <Box
          component="img"
          sx={{ height: 0.7, width: 1, objectFit: "cover", borderRadius: "3% 3% 0% 0%" }}
          src={movie.coverImage}
          alt="a movie"
          onClick={()=>{ handleDetail();}}
        />
    
      <Stack sx={{ height: 0.8, width: 1, alignItems: "center" }}>
        <Typography fontSize={24} >{movie.name}</Typography>
        <Grid container sx={{ justifyContent: "space-around" }}>
          <Typography fontSize={20}>{movie.releaseDate}</Typography>

          {movie.genre === "" || movie.genre === null ?
            <>

            </>
            :
            <>
              <Chip color="primary" label={movie.genre} size="small" sx={{ margin: 0.5 }} />
            </>
          }

        </Grid>
      </Stack>
      
    </Box>
  );
};

export default MovieInfo;
