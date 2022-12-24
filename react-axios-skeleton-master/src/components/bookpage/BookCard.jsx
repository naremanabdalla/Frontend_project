import React from "react";
import {CardActionArea,CardMedia,CardContent,Card,Typography,CardActions,Button}from "@material-ui/core";
import useStyles from './Style'


const BookCard=({BookAuthor,BookName,Price,image})=>{
  const classes=useStyles();
return(

<Card  className={classes.card}  >
              <CardActionArea>
                <div style={{width:"100%",height:"60%"}}>
                   <img src={image} alt={BookName} className={classes.cardMedia}/>
                   </div>
               
                <CardContent className={classes.cardContent}>
                  <Typography  variant="h5" component="h4">
                    {BookName}
                  </Typography>
                  <Typography variant="h6" component="h5" color="text.secondary">
                    {BookAuthor}
                  </Typography>
                  <Typography>{Price}</Typography>
                
              
              <CardActions>
                <Button  size="small" variant="contained" color="primary" >
                  Add to card
                </Button>
              </CardActions>
              </CardContent>
              </CardActionArea>
            </Card>
)}



export default BookCard;