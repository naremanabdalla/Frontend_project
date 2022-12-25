import * as React from 'react';
import { Button, TextField } from '@material-ui/core';
import "./Contact_us.css"
const Contact_us = () => {

    return (

        <>
            <h2 className='contact' >
                <b> Contact_us </b>
            </h2>
            <TextField className='t1' id="first_name" label="first_name" />
            <TextField className='t2' id="Last_name" label="Last_name" />
            <TextField className='t3' id="the topic" label="the topic" />
            <TextField className='t4' id=" Yours Email" label=" Yours Email" />
            <TextField className='t5' id=" Leave us a message " label=" Leave us a message " />
            <Button className="Button1" variant="contained"  >
                send
            </Button>

        </>

    )


}

export default Contact_us
