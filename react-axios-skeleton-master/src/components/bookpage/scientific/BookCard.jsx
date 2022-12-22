import React from "react";

import {CardActionArea,CardMedia,CardContent,Card,Typography,CardActions,Button}from "@mui/material";
const BookCard=({id,BookAuthor,BookName,Price,image})=>{
return(
<>
<Card sx={{ maxwidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {BookName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {BookAuthor}
                  </Typography>
                  <Typography>{Price}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Add to card
                </Button>
              </CardActions>
            </Card>
</>

)}



export default BookCard;