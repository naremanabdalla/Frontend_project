import {react,uesState} from 'react'

import useStyles from "./Style"
import scientific from "./scientific/scientific"
import {Grid,Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button} from "@mui/material"
//const[cart,setCart]=uesState(scientific);
const CardsPage =()=>{
   // const classes = useStyles();

    return(
        <>
        <Grid container>
           
                <Grid item >
<Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image=''
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          hhb
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           mbhjvbn
          </Typography>
          <Typography gutterBottom variant="h4" component="h2">
          ljklm
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to card
        </Button>
       
      </CardActions>
    </Card>

</Grid>




            
        </Grid>
        </>
    );

        }
export default CardsPage;