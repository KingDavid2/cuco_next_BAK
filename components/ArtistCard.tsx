import React, { FC, useState, PropsWithChildren } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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
  artist: {
    name: string,
    lastName: string,
    link: string,
    subheader: string,
    description: string,
    image: string
  }
}

const ArtistCard: FC<Props> = ({ artist }) => {
  const {name, lastName, subheader, description, image, link } = artist

  const initials = () => {
    let i = ''
    if(name)
      i += name[0]

    if(lastName)
      i += lastName[0]

    return i
  }

  const classes = useStyles();

  const fullName = () => `${name} ${lastName}`

  return (
    <Card>
      <CardHeader
        classes={{
          action: classes.action
        }}
        avatar={
          <Avatar aria-label={fullName()}>
            {initials()}
          </Avatar>
        }
        action={
          <>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </>
        }
        title={name + " " + lastName }
        subheader={subheader}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={image}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArtistCard
