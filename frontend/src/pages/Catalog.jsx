import Container from "@mui/system/Container";
import React from "react";
import MovieListCatalog from "../components/MovieListCatalog";

const Catalog = ({ movies, onAdd }) => {
  return (
    <Container maxWidth="lg" sx={{ margin: 2 }}>
      <MovieListCatalog movies={movies} onAdd={onAdd} />
    </Container>
  );
};

export default Catalog;
