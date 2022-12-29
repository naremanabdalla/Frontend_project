import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from "../../bookpage/Style";
import {Button,Card,Container,CardActionArea,CardActions,CardContent,CardMedia,Typography} from '@material-ui/core';
import { Link, Routes } from "react-router-dom";


const P1=({BookName,aboutBook,BookAuthor,aboutAuthor,Price,image})=>{
    
  const classes = useStyles();
return(
<div >
<Container  className={classes.cardGrid} maxWidth="md"  >
<Card className={classes.card}>
        <div style={{height:"65%",width:"40%"}}>
          <img className={classes.cardMedia} src="images/page2/book2.jpg" alt={BookName}></img>
        </div>
        <CardContent className={classes.cardContent}  >
            <Typography>{BookName}</Typography>
          <Typography gutterBottom variant="h5" component="p">
           <u>About Book </u>
           يناقش كِتاب «الذكاء الاصطناعي والروبوتات وكيف ستغيّر كل شيء» موضوع الآثار المستقبلية للذكاء الاصطناعي من خلال النظر إليه ليس بصفته ابتكاراً محدداً، بل باعتباره تقنية قابلة للتطوير، ومن المحتمل أن تكون مدمرة في الوقت ذاته. فهل سيشكّل الذكاء الاصطناعي تهديداً وجودياً للبشرية؟ إذا كنت تحمل هاتفاً
ذكياً، فأنت تتعامل مع الذكاء الاصطناعي، لقد أصبح من المستحيل تجنب الذكاء الاصطناعي الذي غيّر بالفعل كل شيء، من كيفية تشخيص الأطباء للمرض، إلى كيفية تفاعلنا مع الأصدقاء أو قراءة الأخبار، لكن مارتن فورد يعرض في هذا الكتاب لفكرة رائدة مؤداها أن الثورة الحقيقية لم تأتِ بعد
             
          </Typography>
          <Typography>{BookAuthor}</Typography>

          <Typography variant="h5" color="text.secondary">
            <u>About Author</u>
            مارتن فورد
            كاتب و مؤلف
          </Typography>
          <Typography><u>Price</u></Typography>
          <Typography>٢٩٦٫٠٠ ج.م</Typography>
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