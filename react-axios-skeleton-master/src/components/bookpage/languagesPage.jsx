import { react } from "react";
import languagesList from './languages';
import BookCard from "./BookCard";
import { Container, Grid, Toolbar, AppBar, Link, Typography, Button } from "@material-ui/core";
import useStyles from "./Style"
import * as ROUTES from '../../constants/routes'


const Languages = () => {
  const classes = useStyles();

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

      <Container maxWidth="md" >

        <Grid padding={2} spacing={5} container style={{ marginTop: "130px" }}  >
          {languagesList.map((languages) => (
            <Grid xs={6}
              sm={4}
              md={3}
              lg={4}
              height={'500px'}
              width={"100%"}
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
      <div style={{
        background: "#848482",
        padding: "20px",
        margin: "5px",
      }}>
        <Container maxWidth="9g" style={{ marginTop: "10px" }}>
          <Typography variant='h6'
            align="left"
            color='textPrimary'
            gutterBottom>
            <table>
              <thead>
                <tr>
                  <td>instractions</td>
                  <td>Company</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><Link href={ROUTES.Contact_us} variant="body2" color='inherit'>Terms of service</Link></td>
                  <td><Link href={ROUTES.Contact_us} variant="body2" color='inherit'>contact us</Link></td>
                </tr>
                <tr>
                  <td><Link href={ROUTES.About_us} variant="body2" color='inherit'>Copyright </Link></td>
                  <td><Link href={ROUTES.About_us} variant="body2" color='inherit'>About us</Link></td>
                </tr>
                <tr>
                  <td><Link href={ROUTES.About_us} variant="body2" color='inherit'>Return policy</Link></td>
                </tr>
              </tbody>
            </table>
          </Typography>
          <div style={{ padding: "20px", margin: "5px" }}>
            <Container maxWidth="9g" >
              <Typography variant='h7'
                align="center"
                color='textPrimary'
                gutterBottom>
                All rights reserved to BookSky 2021-2022 - by our teams
              </Typography>
            </Container>
          </div>
        </Container>
      </div>
    </div>

  );
};

export default Languages;
