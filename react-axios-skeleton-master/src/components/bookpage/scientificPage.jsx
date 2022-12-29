import { react } from "react";
import scientificList from './scientific';
import BookCard from "./BookCard";
import {
  Grid, Container, Typography, Toolbar, MenuItem, AppBar, Link, Button, Box,
  List,
  ListItemText,
} from "@material-ui/core";
import useStyles from './Style'
import { grey } from "@material-ui/core/colors";
import { Routes } from "react-router-dom";
import * as ROUTES from '../../constants/routes'

const Scientific = () => {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} style={{ flex: 1 }}>
            <Link href={ROUTES.homepage_map} style={{ color: "#f8f8ff" }}>
              BookSky store
            </Link>
          </Typography>
          <Link href={ROUTES.Contact_us} variant="body2">
            <Button variant="text" color="success" >contactus</Button>
          </Link>
          <Link href={ROUTES.About_us} variant="body2">
            <Button variant="text" color="success" >Aboutus</Button>
          </Link>
          <Link href={ROUTES.SIGN_IN} variant="body2">
            <Button variant="text" color="success">Signin</Button>
          </Link>
          <Link href={ROUTES.SIGN_UP} variant="body2">
            <Button variant="text" color="success">register</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Container className={classes.cardGrid} maxWidth="md" >
     <Grid  padding={1} spacing={2} container  style={{marginTop:"130px"}}>
        {scientificList.map((scientific) => (
          <Grid xs={6}
           sm={4}
           md={3}
           lg={4}
          
              item 
               Key={scientific.id}>
            <BookCard
             id={scientific.id}
            image={scientific.image}
            BookAuthor={scientific.BookAuthor}
            BookName={scientific.BookName}
            Price={scientific.Price}
            Links={scientific.Links}
            
            />

          </Grid>
        ))}
        
     </Grid>
     </Container>



       
      <div style={{

        background: "#848482",
        padding: "20px",
        margin: "5px",
      }}>

        <Grid container spacing={2} justifyContent="center">
          <Grid item md={6} lg={4}>
            <Typography variant="body1">Information</Typography>
            <Typography variant="caption"> book sky store is a book store build in 20/Oct/2003
              we have more than ten shop around EGYPT, and we have more than 1000 employee work with us
              and we have more than 10000 book in our store </Typography>
          </Grid>
          <Box sx={{ mt: 4 }}></Box>
          <Grid item md={6} lg={2}>
            <Typography>Company</Typography>
            <List>
              <ListItemText>
                <Typography lineHeight={2} variant="caption">
                  <Link href={ROUTES.Contact_us} variant="body2" color='inherit'>contact us</Link>
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption">
                  <Link href={ROUTES.About_us} variant="body2" color='inherit'>About us</Link>
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption">
                  <Link href={ROUTES.About_us} variant="body2" color='inherit'>Return policy</Link>
                </Typography>
              </ListItemText>
              <ListItemText>
                <Typography lineHeight={2} variant="caption">
                  <Link href={ROUTES.About_us} variant="body2" color='inherit'>Copyright</Link>
                </Typography>
              </ListItemText>
            </List>
          </Grid>
        </Grid>
      </div>
    </div>



  );
};

export default Scientific;