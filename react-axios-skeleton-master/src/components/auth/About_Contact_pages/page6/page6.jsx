import { makeStyles } from '@material-ui/styles';
import date from './page6_date';
import {AppBar,MenuItem,Toolbar, Container,Card,CardMedia,CardContent,CardActions,Button,Typography} from "@material-ui/core";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
    Card: { height: "80%", display: "flex", flexDirection: "column", padding: "25px 25px" }
    , CardMedia: { padding: "56.25%" }
    , CardContent: { flexGrow: 1 }
    , cardGrid: { padding: "10px 0" }
});
const page6 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles ();

  return (
    <>
     <AppBar position="static">
                <Toolbar>
                <b className='title'>كتب علم النفس </b>
                <Toolbar/>  
                <MenuItem  >الروايات</MenuItem>
                <MenuItem >كتب الأدب </MenuItem>
                <MenuItem >Contact_us</MenuItem>
                <MenuItem >About_us</MenuItem>    
                </Toolbar>
            </AppBar>
< Container className={classes.cardGrid} maxWidth="md"> 
    <Grid container spacing={4}>
        {date.map((page6_date) => (                       
                        <Grid item key={page6_date.id}>
                                <Card className={classes.Card}>
                                    <CardMedia className={classes.CardMedia}
                                         image={page6_date.image} title="book"></CardMedia>
                                    <CardContent className={classes.CardContent}>
                                        <b><p>{page6_date.title}</p></b>
                                        <Typography>{page6_date.Another}</Typography>
                                        <Typography>{page6_date.price}</Typography>
                                        <CardActions className={classes.CardActions}>
                                            <Button size='small' color='primary' variant="contained">Add To Card</Button>
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Grid>
                             ))}
                              </Grid>
                             </Container>    </>
  );
};

export default page6;