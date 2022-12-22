import React from "react";
import {scientific} from './scientific/scientific'
import {Grid} from "@mui/material";
import { useState } from "react";
import {CardActionArea,CardMedia,CardContent,Card,Typography,CardActions,Button}from "@mui/material";
const BookCard=()=>{
return(

<Card sx={{maxwidth:345}}>
  <CardActionArea>
    <CardMedia
    component="img"
    height="140"
    image="./scientific/img1.jpg"
    alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        lizard
       </Typography>
       <Typography variant="body2" color="text.secondary">
        hhgfdxcbh
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button size="small" color="primary">
      Add to card
    </Button>
  </CardActions>
</Card>



)}



export default BookCard;