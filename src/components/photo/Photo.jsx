import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import brokenGlass from '../../assets/img/brokenGlass.jpg'
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    borderRadius:'5%',
    border: "solid gray 1px" 
  },
  media: {
    height: 0,
    paddingTop: '70%', // 16:9
  },
  head:{
    maxHeight: '10px',
    background: 'gray'
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();


 
  return (
    <Card className={classes.root}>
      <CardHeader className={classes.head}
        title="Photography Number One"
      />
      <CardMedia
        className={classes.media}
        image={brokenGlass}
        title="Paella dish"
      />

    </Card>
  );
}
