import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from "../Style";
import { Button, Card, Container, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link, Routes } from "react-router-dom";


const P1 = ({ BookName, aboutBook, BookAuthor, aboutAuthor, Price, image }) => {

  const classes = useStyles();
  return (
    <div >
      <Container className={classes.cardGrid} maxWidth="md" >
        <Card className={classes.card} style={{ flexDirection: "inherit" }}>
          <div style={{ height: "65%", width: "40%" }}>
            <img className={classes.cardMedia} src="/images/scientific/img1.jpg" alt={BookName}></img>
          </div>
          <CardContent className={classes.cardContent}  >


            <Typography variant="h5" color="text.secondary">
              <u>About Author</u>
              طبيب اسكتلندي وكاتب مشهور بتأليفه لقصص المحقق شرلوك هولمز التي تعد معلما بارزًا في الأدب البوليسي، وأيضا بابتكاره لشخصية البروفيسور تشالنجر ولإشاعته قضية باخرة ماري سليست الغامضة. كتاباته كانت غزيرة تضمنت قصص الفنتازيا وقصص الخيال العلمي، المسرحيات، وروايات رومانسية وواقعية وتاريخية.

            </Typography>
            <Typography ><u>Price</u></Typography>
            <Typography>٤٩٢٫٠٠ ج.م</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" >
              Add to card
            </Button>

          </CardActions>

        </Card>
      </Container>
    </div>
  )
}

export default P1;