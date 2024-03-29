import { useState } from "react";
import { Fab } from "@mui/material";
import Container from "@mui/material/Container";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";

// Own
import MovieListAdmin from "../components/MovieListAdmin";
import AddMovieModal from "../modals/AddMovieModal";
import EditMovieModal from "../modals/EditMovieModal";
import { deleteMovie, saveMovie, updateMovie } from "../api/moviesApi";


const AdminPage = ({ allMovies, setAllMovies }) => {
    const [isAddMovieModalVisible, setIsAddMovieVisible] = useState(false);
    const [isEditMovieModalVisible, setIsEditMovieModalVisible] = useState(false);
    const [editMovie, setEditMovie] = useState();

    const handleOnSubmit = async (movie) => {
        const tempMovies = Array.from(allMovies);
        if (movie._id) {
            const newMovie = await updateMovie(movie);
            const movieIndex = tempMovies.findIndex(m => m._id === movie._id);
            tempMovies[movieIndex] = newMovie;
        }
        else {
            const newMovie = await saveMovie(movie);
            if (newMovie)
                tempMovies.push(newMovie);
        }
        setAllMovies(tempMovies);
    };

    const handleOnEdit = movie => {
        setIsEditMovieModalVisible(true)
        setEditMovie(movie)
    }

  

    const handleOnDelete = async id => {
        const response = await deleteMovie(id);
        if (response)
            setAllMovies(prev => prev.filter(m => m._id !== id));
    }

    return (
        <Container maxWidth="lg" sx={{ margin: 2 }}>
            <Fab
                variant="extended"
                onClick={() => setIsAddMovieVisible(true)}
                sx={{
                    position: "absolute",
                    bottom: "24px",
                    right: "24px",
                }}
            >
                <AddCircleOutline sx={{ mr: 1 }} />
                Add a new movie
            </Fab>
            <MovieListAdmin
                movies={allMovies}
                handleOnEdit={handleOnEdit}
                handleOnDelete={handleOnDelete}
            />
            <AddMovieModal
                open={isAddMovieModalVisible}
                onClose={() => setIsAddMovieVisible(false)}
                onSubmit={handleOnSubmit}
            />
            <EditMovieModal
                open={isEditMovieModalVisible}
                onClose={() => setIsEditMovieModalVisible(false)}
                onSubmit={handleOnSubmit}
                movie={editMovie}
            />
        </Container>
    );
};

export default AdminPage;