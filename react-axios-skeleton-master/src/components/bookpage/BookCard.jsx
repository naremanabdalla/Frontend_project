import React from "react";
import useStyles from "./Style";
import * as ROUTES from '../../constants/routes';
import ScientificDetail from "./scientificDetail";
import { CardActionArea, CardMedia, CardContent, Card, Typography, CardActions, Button,Link } from "@material-ui/core";
const BookCard = ({ BookAuthor, BookName, Price, image }) => {
  const classes = useStyles();
  return (
    <>

      <Card className={classes.card}>
        <div style={{height:"65%",width:"100%"}}>
          <img className={classes.cardMedia} src={image} alt={BookName}></img>
        </div>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="div">
            {BookName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {BookAuthor}
          </Typography>
          <Typography>{Price}</Typography>
          </CardContent>
        <CardActions>
          <Button size="small" >
            Add to card
          </Button>
          
          <Link href={ROUTES.ScientificDetail} variant="body2">

          <Button size="small" >
            Details
          </Button>
          </Link>
        
        </CardActions>
        
      </Card>
    </>

  )
}



export default BookCard;
