import { Box, Card, Chip, Grid, Link, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const MovieDetails = ({ route, navigation }) => {
    // const {movie, movieId} = route.params;
    const navigate = useNavigate();
    const { state } = useLocation();
    const { movie, movieId } = state || {};
    console.log(state);
    return (
        <Fragment>
            <Card sx={{ backgroundColor: "#E9ECF4", height: "100%", borderRadius: 3, margin: 4 }}>
                {/* {movie.name} */}
                <Card sx={{ backgroundColor: "#E9ECF4", height: "100%", borderRadius: 3, margin: 2 }}>
                    <Box
                        component="img"
                        sx={{ height: 0.5, width: 1, objectFit: "cover", borderRadius: "3" }}
                        src={movie.coverImage}
                        alt="a movie"
                    />


                </Card>
                <Card sx={{ backgroundColor: "#E9ECF4", height: "100%", borderRadius: 3, margin: 2 }}>
                    {movie.synopsis}


                </Card>

                <button type="button" onClick={() => { navigate(-1) }}>
                    Back
                </button>
            </Card>
        </Fragment>
    );
}

export default MovieDetails;