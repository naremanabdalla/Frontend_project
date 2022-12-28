import { makeStyles } from "@material-ui/core/styles";
import * as React from 'react';
import {Container, Button, TextField, Card } from '@material-ui/core';
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
