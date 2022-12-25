import { react } from "react";
import historicalList from './historical';
import BookCard from "./BookCard";
import {Grid,Container} from "@material-ui/core";
import useStyles from './Style'

const Historical = () => {
  const classes=useStyles();

  return (
    <div>
<Container  className={classes.cardGrid} maxWidth="md">
     <Grid  padding={1} spacing={2} container >
        {historicalList.map((historical) => (
          <Grid xs={6}
           sm={4}
           md={3}
           lg={4}
           height={'100px'}
             width={"100%"}
              item 
               Key={historical.id}>
            <BookCard
             id={historical.id}
            image={historical.image}
            BookAuthor={historical.BookAuthor}
            BookName={historical.BookName}
            Price={historical.Price}
            />
          </Grid>
        ))}
        
     </Grid>
     </Container>
     </div>
    
  );
};

export default Historical;
