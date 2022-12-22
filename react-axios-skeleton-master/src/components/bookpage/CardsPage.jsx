import { react, uesState } from "react";

import useStyles from "./Style";
import scientific from "./scientific/scientific";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useState } from "react";

const CardsPage = () => {
  //const [data,setData] = useState(scientific);

  return (
    <>
      <Grid container>
        {scientific.map((data) => (
          <Grid item Key={data.id}>
            <Card sx={{ maxwidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={data.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.BookName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.BookAuthor}
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
        ))}
      </Grid>
    </>
  );
};

export default CardsPage;
