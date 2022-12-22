import { Box, Button, Card, Chip, Grid, Link, Stack, Typography } from "@mui/material";
import React, { Fragment, useState, useEffect } from "react";
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
import { StarBorder, StarBorderIcon } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import ReactPlayer from 'react-player'

const MovieDetails = ({onFav}) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { movie } = state || {};
   

    const [isFavorite, setIsFavorite] = useState(false);
    const Fav = () => {
        if (isFavorite) {
            return <StarIcon
                style={{ display: "flex", flexDirection: "column", alignSelf: "flex-end", marginRight: 40 }}
                sx={{ display: 'flex', cursor:'pointer' }}
                onClick={()=>{setIsFavorite(false)}}
            />

        }
        else {
            return <StarBorder
                style={{ display: "flex", flexDirection: "column", alignSelf: "flex-end", marginRight: 40 }}
                sx={{ display: 'flex', cursor:'pointer'  }}
                onClick={()=>{setIsFavorite(true)}}
            />


        }

    }

    return (
        <Fragment>
            <Card sx={{ backgroundColor: "#E9ECF4", height: "100%", borderRadius: 3, margin: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography sx={{ marginTop: 4, fontSize: 24 }} alignSelf={'center'}>{movie.name}</Typography>

                <Fav />

                <Card

                    sx={{ backgroundColor: "#E9ECF4", height: 0.9, width: 0.9, borderRadius: 3, margin: 2, display: "flex", flexDirection: "column", alignSelf: "center", justifyContent: "center", padding: 1 }}>

                    <ReactPlayer
                        style={{ borderRadius: 5 }}
                        height={"500px"}
                        width={"100%"}
                        light={true}
                        controls={true}
                        url={movie.movieUrl}
                    />
                </Card>
                <Card sx={{ padding: 3, backgroundColor: "#E9ECF4", height: "100%", borderRadius: 3, margin: 1, width: 0.5, alignSelf: "center"}}>
                    <Typography
                    align="center"
                    sx={{alignSelf:"center"}}
                    >
                    Genre: {movie.genre}
                    </Typography>

                </Card>

                <Card sx={{ padding: 3, backgroundColor: "#E9ECF4", height: "100%", borderRadius: 3, margin: 2, width: 0.7, alignSelf: "center" }}>
                    {movie.synopsis}

                </Card>

                <Button onClick={() => { navigate(-1) }}>
                    Back
                </Button>
            </Card>
        </Fragment>
    );
}

export default MovieDetails;