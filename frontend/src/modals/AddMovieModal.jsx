import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import MovieForm from "../forms/MovieForm"

const AddMovieModal = ({ open, onClose, onSubmit }) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        Add new movie...
      </DialogTitle>
      <DialogContent>
        <MovieForm onSubmit={onSubmit} />
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          color='error'
          form='movie-form'
          type='reset'
          children='Clear form'
        />
        <Button
          variant='outlined'
          form='movie-form'
          type='submit'
          children='Add movie'
          onClick={onClose}
        />
      </DialogActions>
    </Dialog>
  )
}

export default AddMovieModal;