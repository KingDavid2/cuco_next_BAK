import React, { FC } from 'react';
import Card from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { IArtist, IArtwork } from '../../types/api'
import { useGetArtistsQuery, useDeleteArtworkMutation } from '../../redux/api'
import { CardActionArea, CardActions } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    borderRadius: '12px',
    minWidth: '20%',
    border: '0',
    background: '#fafafa'
  },
  media: {
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  action: {
    justifyContent: 'flex-end'
  }
}),
);

interface Props {
  artwork: IArtwork
}

const ArtworkCard: FC<Props> = ({ artwork }) => {
  const { id, user_id, title, description, height, depth, width, can_sell, price, quantity, images } = artwork
  const [deleteArtwork, { isLoading: isDeleting }] = useDeleteArtworkMutation()
  const { data: artists, error, isLoading: isLoadingArtists } = useGetArtistsQuery(null)

  const classes = useStyles();
  const artist = artists && artists.find( (artist: IArtist) => artist.id === user_id)

  return (
    <Card
      variant='outlined'
      className={classes.root}>

      <CardMedia
        className={classes.media}
        image={images![0]}
        title={images![0]}
      />
      
      <CardContent>
        <Typography variant="subtitle1">
          <Link href={`/artworks/${id}`}>
            {title}
          </Link>
        </Typography>
        <Typography variant="subtitle1">
          {`by `}
          <Link href={`/artist/${id}`}>
            {artist && artist.name}
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
          <IconButton size='small' aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton size='small' aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            size='small'
            onClick={() => deleteArtwork(id!)}
            aria-label="delete">
            <CloseIcon />
          </IconButton>
        </CardActions>
    </Card>
  );
};

export default ArtworkCard
