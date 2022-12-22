import { Box, Button } from "@mui/material";
import React from "react";

const Buttons = ({movies, filterMovie, setMovie, catalogMovies }) => {
  return (
    <>
      <Box  sx={{justifyContent: 'center', marginTop: '2%'}}>
        {catalogMovies.map((Val, id) => {
          return (
            <Button
              onClick={() => filterMovie(Val)}
              key={id}
            >
              {Val}
            </Button>
          );
        })}
        <Button
          onClick={() => setMovie(movies)}
        >
          All
        </Button>

        {/* <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("Breakfast")}
        >
          Breakfast
        </button>
        <button
          className="btn-warning text-white p-1 px-2 mx-5"
          onClick={() => filterItem("Lunch")}
        >
          Lunch
        </button>
        <button
          className="btn-warning text-white p-1 mx-5"
          onClick={() => filterItem("Dinner")}
        >
          Dinner
        </button> */}
      </Box>
    </>
  );
};

export default Buttons;