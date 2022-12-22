import React from "react";
import MovieInfo from "./MovieInfo";
import Button from "@mui/material/Button";
import { PlayArrow, Info } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MovieCatalog = ({ movie, onAdd }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate('/details', { state: { movie } });
  }
  return (
    <>

      <MovieInfo data-testid="movieComp" movie={movie} />
      <Grid container sx={{ justifyContent: 'center', marginBottom: 0 }}>
        <Grid item xs={5} sx={{ margin: 1 }}>
          <Button onClick={() => window.open(movie.movieUrl)} sx={{ background: "#E9ECF4", height: 50, width: 1, margin: 0, padding: 0, borderRadius: 8, border: 1, boxShadow: 2 }}>
            <Typography fontSize={18} sx={{ color: "black" }}>Watch</Typography>
            <PlayArrow sx={{ paddingLeft: 1, color: "black" }} />
          </Button>
        </Grid>
        <Grid item xs={5} sx={{ margin: 1 }}>
          <Button onClick={() => { handleDetail() }} sx={{ height: 1, width: 1, borderRadius: 10, boxShadow: 2 }}>
            <Info sx={{ paddingLeft: 1, color: "black" }} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default MovieCatalog;
