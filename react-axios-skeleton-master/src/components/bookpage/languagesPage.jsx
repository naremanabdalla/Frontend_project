import { react } from "react";
import languagesList from './languages';
import BookCard from "./BookCard";
import {Container, Grid,Toolbar,AppBar,Link,Typography,Button} from "@material-ui/core";
import useStyles from "./Style"
import * as ROUTES from '../../constants/routes'


const Languages = () => {
  const classes=useStyles();

  return (
    <div>
         <AppBar position="static">
<Toolbar>
  <b className="title">BookSky</b>

<Link href={ROUTES.page3} variant="body2">
  <Button>Novels</Button>
</Link>
<Link href={ROUTES.page2} variant="body2">
  <Button>Literature</Button>
</Link>
<Link href={ROUTES.page6} variant="body2">
  <Button>Psychology</Button>
</Link>

<Link href={ROUTES.Historical} variant="body2">
  <Button>Historical</Button>
</Link>
<Link href={ROUTES.Languages} variant="body2">
  <Button>Languages</Button>
</Link>
<Link href={ROUTES.Scientific} variant="body2">
  <Button>Science</Button>
</Link>
</Toolbar>
      </AppBar>

      <Container  className={classes.cardGrid} maxWidth="md" >
     
     <Grid  padding={1} spacing={2} container style={{marginTop:"130px"}}  >
        {languagesList.map((languages) => (
          <Grid xs={6}
          sm={4}
          md={3}
          lg={4}
        
              item 
               Key={languages.id}>
            <BookCard
             id={languages.id}
            image={languages.image}
            BookAuthor={languages.BookAuthor}
            BookName={languages.BookName}
            Price={languages.Price}
            />
          </Grid>
        ))}
        
     </Grid>
     </Container>
     </div>
    
  );
};

export default Languages;