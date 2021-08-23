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
import { IArtwork } from '../../types/api'
import { useDeleteArtworkMutation } from '../../redux/api'

const useStyles = makeStyles((theme: Theme) => createStyles({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  action: {
    width: 'max-content'
  }
}),
);

interface Props {
  artwork: IArtwork
}

const ArtworkCard: FC<Props> = ({ artwork }) => {
const { id, user_id, title, description, height, depth, width, can_sell, price, quantity, images } = artwork
  const [deleteArtwork, { isLoading }] = useDeleteArtworkMutation()

  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        classes={{
          action: classes.action
        }}
        action={
          <>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton 
              onClick={() => deleteArtwork(id!)}
              aria-label="delete">
              <CloseIcon />
            </IconButton>
          </>
        }
        title={
          <Link href={`/artworks/${id}`}>
            {title}
          </Link>
          }
        subheader={description}
      />
      <CardMedia
        className={classes.media}
        image={images![0]}
        title={images![0]}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArtworkCard
