import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography, Chip, Grid } from '@mui/material';
const MovieInfo = ({ movie }) => {
  return (
    <Box sx={{ backgroundColor: "white", height: 480, border: 1 }}>
      <Box
        component="img"
        sx={{ height: 0.4, width: 1, objectFit: "cover" }}
        src={movie.coverImage}
        alt="a movie"
      />
      <Stack
        sx={{ height: 0.6, px: 4, width: 0.85 }}
        justifyContent="space-around"
        spacing={2}
      >
        <Stack spacing={1} sx={{ width: 1 }}>
          <Typography fontSize={24}>{movie.name}</Typography>

        </Stack>
        <Stack>
          <Typography fontSize={10}>{movie.synopsis}</Typography>
          <Grid>
            {movie.genre == "" || movie.genre == null ?
              <>
          
              </>
              :
              <>
                <Chip color="primary" label={movie.genre} size="small" sx={{ width: 0.30, margin: 0.5 }} />
              </>
            }

          </Grid>

          <Typography fontSize={24}>{movie.movieUrl}</Typography>
          <Typography fontSize={24}>{movie.releaseDate}</Typography>
        </Stack>
        {/* <Stack spacing={1} sx={{ width: 1 }}>
          <Typography fontSize={16}>Price</Typography>
          <Typography fontSize={24}>{`$${movie.price}`}</Typography>
        </Stack> */}
      </Stack>
    </Box>
  );
};

export default MovieInfo;
