import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from "../Style";
import {Button,Card,Container,CardActionArea,CardActions,CardContent,CardMedia,Typography} from '@material-ui/core';
import { Link, Routes } from "react-router-dom";


const P1=({BookName,aboutBook,BookAuthor,aboutAuthor,Price,image})=>{
    
  const classes = useStyles();
return(
<div >
<Container  className={classes.cardGrid} maxWidth="md"  >
<Card className={classes.card}>
        <div style={{height:"65%",width:"40%"}}>
          <img className={classes.cardMedia} src="/images/historical/img3.jpg" alt={BookName}></img>
        </div>
        <CardContent className={classes.cardContent}  >
            <Typography>{BookName}</Typography>
          <Typography gutterBottom variant="h5" component="p">
           <u>About Book </u>
             
          </Typography>
          <Typography>{BookAuthor}</Typography>

          <Typography variant="h5" color="text.secondary">
            <u>About Author</u>
            مارتن فورد
            كاتب و مؤلف
          </Typography>
          <Typography><u>Price</u></Typography>
          <Typography>٢٩٦٫٠٠ ج.م</Typography>
          </CardContent>
        <CardActions>
          <Button size="small" >
            Add to card
          </Button>
         
        </CardActions>
        
      </Card>
      </Container>
</div>
)
}

export default P1;