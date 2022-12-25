import { react } from "react";
import scientificList from './scientific';
import BookCard from "./BookCard";
import {Grid,Container} from "@material-ui/core";
import useStyles from './Style'

const Scientific = () => {
  const classes=useStyles();

  return (
    <div>
<Container  className={classes.cardGrid} maxWidth="md">
     <Grid  padding={1} spacing={2} container >
        {scientificList.map((scientific) => (
          <Grid xs={6}
           sm={4}
           md={3}
           lg={4}
           height={'300px'}
             width={"100%"}
              item 
               Key={scientific.id}>
            <BookCard
             id={scientific.id}
            image={scientific.image}
            BookAuthor={scientific.BookAuthor}
            BookName={scientific.BookName}
            Price={scientific.Price}
            />
          </Grid>
        ))}
        
     </Grid>
     </Container>
     </div>
    
  );
};

export default Scientific;
