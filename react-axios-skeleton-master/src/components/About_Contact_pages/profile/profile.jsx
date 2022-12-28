import Link from "@material-ui/core/Link";
import * as ROUTES from '../../../constants/routes';
import { makeStyles } from '@material-ui/styles';
import img_profile from './profile.jpg';
import { AppBar, Toolbar, Button, Typography, Card ,Container} from "@material-ui/core";
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
            
            < Container className={classes.cardGrid}>
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
            <Link href={ROUTES.Contact_us} variant="body2">
                        <Button variant="text" color="success" >contactus</Button>
                    </Link>
                    <Link href={ROUTES.About_us} variant="body2">
                        <Button variant="text" color="success" >Aboutus</Button>
                    </Link>
                </Card>   
                </Container>
            
                 </>
    );
};
export default profile;