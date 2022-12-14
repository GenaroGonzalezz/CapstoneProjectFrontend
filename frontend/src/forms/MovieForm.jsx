import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { Box, Grid, TextField } from '@mui/material'

const MovieForm = ({ onSubmit, defaultEditValues }) => {

  const defaultValues = {
    name: '',
    synopsis: '',
    coverImage: '',
    genre: '',
    movieUrl: '',
    releaseDate: ''
  }

  const movieFormSchema = yup.object().shape({
    name: yup.string().required('You need to add a name'),
    synopsis: yup.string(),
    coverImage: yup.string(),
    genre: yup.string(),
    movieUrl: yup.string(),
    releaseDate: yup.string(),
  })

  const { control, watch, handleSubmit, reset } = useForm({
    defaultValues: defaultEditValues || defaultValues,
    resolver: yupResolver(movieFormSchema),
    mode: 'all',
  })

  const coverImageValue = watch('coverImage')

  return (
    <Box
      id='movie-form'
      component='form'
      onReset={() => reset(defaultValues)}
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: '24px' }}
    >
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Controller
            control={control}
            name='name'
            render={ ({ field, fieldState }) => (
              <TextField
                {...field}
                label='Name'
                variant='outlined'
                fullWidth
                error={ !!fieldState.error }
                helperText={ fieldState.error?.message }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name='synopsis'
            render={ ({ field, fieldState }) => (
              <TextField
                {...field}
                label='Synopsis'
                variant='outlined'
                fullWidth
                error={ !!fieldState.error }
                helperText={ fieldState.error?.message }
              />
            )}
          />
        </Grid>
       

        <Grid item xs={6}>
          <Controller
            control={control}
            name='genre'
            render={ ({ field, fieldState }) => (
              <TextField
                {...field}
                label='Genre'
                variant='outlined'
                fullWidth
                error={ !!fieldState.error }
                helperText={ fieldState.error?.message }
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name='movieUrl'
            render={ ({ field, fieldState }) => (
              <TextField
                {...field}
                label='Movie URL'
                variant='outlined'
                fullWidth
                error={ !!fieldState.error }
                helperText={ fieldState.error?.message }
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            control={control}
            name='releaseDate'
            render={ ({ field, fieldState }) => (
              <TextField
                {...field}
                label='Release Date'
                variant='outlined'
                fullWidth
                error={ !!fieldState.error }
                helperText={ fieldState.error?.message }
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            control={control}
            name='coverImage'
            render={ ({ field, fieldState }) => (
              <TextField
                {...field}
                label='Cover Image'
                variant='outlined'
                fullWidth
                error={ !!fieldState.error }
                helperText={ fieldState.error?.message }
              />
            )}
          />
        </Grid>
        {
          !!coverImageValue &&
          <Grid item xs={12}>
            <Box
              sx={{ width: '100%' }}
              component='img'
              src={coverImageValue}
            />
          </Grid>
        }
      </Grid>
    </Box>
  )
}

export default MovieForm;