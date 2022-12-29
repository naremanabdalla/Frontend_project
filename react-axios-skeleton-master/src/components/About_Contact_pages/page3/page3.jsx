import { makeStyles } from '@material-ui/styles';
import date from './page3_date';
import Link from "@material-ui/core/Link";
import * as ROUTES from '../../../constants/routes';
import {
    AppBar, MenuItem, Toolbar, Container, Card, CardMedia, CardContent, CardActions, Button, Typography, Box,
    List,
    ListItemText,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
    Card: { height: "80%", display: "flex", flexDirection: "column", padding: "25px 25px" }
    , CardMedia: { padding: "56.25%" }
    , CardContent: { flexGrow: 1 }
    , cardGrid: { padding: "10px 0" }
});
const page3 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} style={{ flex: 1 }}>
                        BookSky store
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
            < Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {date.map((page3_date) => (
                        <Grid item key={page3_date.id}>
                            <Card className={classes.Card}>
                                <CardMedia className={classes.CardMedia}
                                    image={page3_date.image} title="book"></CardMedia>
                                <CardContent className={classes.CardContent}>
                                    <b><p>{page3_date.title}</p></b>
                                    <Typography>{page3_date.Another}</Typography>
                                    <Typography>{page3_date.price}</Typography>
                                    <CardActions className={classes.CardActions}>
                                        <Button size='small' color='primary' >Add To Card</Button>
                                        <Button size='small' color='primary' >details</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
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
        </>
    );
};

export default page3;