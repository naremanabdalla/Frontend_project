import { makeStyles } from "@material-ui/core/styles";
import * as React from 'react';
import * as ROUTES from '../../../constants/routes';

import {Container, Button, TextField, Card,Grid,Typography ,Toolbar,Link,AppBar} from '@material-ui/core';
const useStyles = makeStyles(() => ({
    paper: {
      alignItems: "center"
    }, 
       form: {
        width: "50%"
        ,
        alignItems: "center" 
      },
      Card: {  display: "flex", flexDirection: "column", padding: "10px 25px" }
    }));
const Contact_us = () => {
    const classes = useStyles();

    return (

        <>
         <AppBar position="static">
         <Toolbar>
                    {/* <ListItemButton><AddShoppingCartIcon /></ListItemButton> */}
                    {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <TurnedInIcon></TurnedInIcon>
                        <SvgIcon />
                    </IconButton> */}
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} style={{ flex: 1 }}>
                    <Link href={ROUTES.homepage_map} style={{ color: "#f8f8ff" }}>
                            BookSky store
                        </Link>
                            </Typography>
                    <Grid >
                        <Toolbar >
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
                            <Link href={ROUTES.profile} variant="body2">
                                <Button variant="text" color="success">profile</Button>
                            </Link>
                            {/* <IconButton color='inherit' aria-label="add to shopping cart">
                                <AddShoppingCartIcon />
                            </IconButton> */}
                        </Toolbar>
                    </Grid>
                </Toolbar>
                </AppBar>
< Container className={classes.cardGrid}>
            <h2 className='contact' align="center" >
                <b> Contact_us </b>
            </h2>
            <Card className={classes.Card}>
            <TextField  className={classes.form} id="first_name" label="first_name" />
            </Card>
            <Card className={classes.Card}>
            <TextField className={classes.form} id="Last_name" label="Last_name" />
            </Card>
            <Card className={classes.Card}>
            <TextField className={classes.form} id="the topic" label="the topic" />
            </Card>
            <Card className={classes.Card}>
            <TextField className={classes.form} id=" Your Email" label=" Yours Email" />
            </Card>
            <Card className={classes.Card}>
            <TextField className={classes.form} id=" Leave us a message " label=" Leave us a message " />
            </Card>
            
            <Button className="Button1"  variant="contained" >
                send
            </Button>

            </Container>
        </>

    )


}

export default Contact_us
