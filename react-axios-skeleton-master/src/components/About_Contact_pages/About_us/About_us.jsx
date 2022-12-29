import * as React from 'react';
import {Container, Button, TextField, Card,Grid,Typography ,Toolbar,Link,AppBar} from '@material-ui/core';
import * as ROUTES from '../../../constants/routes';


const About_us = () => {

    return (

        <>
        
        <AppBar position="static">
         <Toolbar>
                    {/* <ListItemButton><AddShoppingCartIcon /></ListItemButton> */}
                    {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <TurnedInIcon></TurnedInIcon>
                        <SvgIcon />
                    </IconButton> */}
                    <Link href={ROUTES.homepage_map} style={{ color: "#f8f8ff" }}>
                            BookSky store
                        </Link>
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
            <h2 className='About' align="center" >
                <b className='title'  >About_us</b>
            </h2>
            <p className='p1' align="center">
                <p> We are students at the Faculty of Science, Cairo University, a single computer department
                </p><p>This is a strategic location for selling various books with a bright view of hopes and aspirations
                </p><p>This project is very good and the students did:</p>
                <p><q>Habiba Mohsen Omar</q></p>
                <p><q>Nariman Abdullah</q></p>
                <p><q>Farah Mostafa</q></p>
                <p><q>Rokia Mohamed Fawzy</q></p>
                <p><q>Mai Mahmoud Mohamed</q></p>

            </p>


        </>

    )


}

export default About_us