import Link from "@material-ui/core/Link";
import * as ROUTES from '../../../constants/routes';
import { makeStyles } from '@material-ui/styles';
import img_profile from './profile.jpg';
import { AppBar, Toolbar, Button, Typography, Card, Container, Grid, Box, List, ListItemText } from "@material-ui/core";
const useStyles = makeStyles({
    Card: { height: "10px", width: "150", padding: "25px 80px" }
    , CardMedia: { padding: "56.25%" }
    , cardGrid: { padding: "10px 10" }

});
const profile = () => {
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

            < Container className={classes.cardGrid} style={{ paddingBottom: "200px" }} >
                <Card align="center">
                    <img src={img_profile} />

                </Card>
                <Card className={classes.Card}>
                    <Typography> First_Name:
                    </Typography>
                </Card>
                <Card className={classes.Card}>
                    <Typography> Last_Name :
                    </Typography></Card>
                <Card className={classes.Card}>
                    <Typography> The Emails :
                    </Typography> </Card>
                <Card className={classes.Card}>
                    <Typography> The Phone :
                    </Typography>
                </Card>
                <Card className={classes.Card}>

                </Card>
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
export default profile;