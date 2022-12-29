import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from "../Style";
import {Button,Card,Container,CardActionArea,CardActions,CardContent,CardMedia,Typography} from '@material-ui/core';
import { Link, Routes } from "react-router-dom";


const P1=({BookName,aboutBook,BookAuthor,aboutAuthor,Price,image})=>{
    
  const classes = useStyles();
return(
<div >
<Container  className={classes.cardGrid} maxWidth="md" >
<Card className={classes.card} style={{flexDirection:"inherit"}}>
        <div style={{height:"65%",width:"40%"}}>
          <img className={classes.cardMedia} src="/images/scientific/img1.jpg" alt={BookName}></img>
        </div>
        <CardContent className={classes.cardContent}  >
          <Typography gutterBottom variant="h5" component="p">
           <u>About Book </u>
           إنقاذه. فهو يتعجّب من مرونة الطبيعة وقدرتها على الاستمرار في غمرة الفوضى من المناطق القطبية التي تساعد على استقرار المناخ العالمي، إلى الصحارى التي تخصّب الغابات، وا
لمحيطات والجبال التي تولّد الأمطار فوق الأراضي العشبية... من هنا يشكّل هذا الكتاب نداء أخيراً إلى العمل، من أجل عملية ترميم بيئية كبيرة، لتعزيز تجدّد الطبيعة، وذلك بدءاً من اليوم. لذلك، يوجّه الكتاب هذه الدعوة، ويعتبر أنّ الأوان لم يفت بعد، وأنّ هذه المهمّة ممكنة وضرورية من أجل استمرار البشرية.

نتتبع عبر صفحات هذا الكتاب خطى صانعي أفلام "كوكبنا" ونتنقّل من الغابات الاستوائية المتقلّصة وأعماق البحار الخالية، إلى الغطاء الجليدي القطبي الذائب، إلى المروج الجافّة المتصحّرة، والأنهار التي لم تتدفّق بحرّية، والهياكل البيضاء المخيفة للشعاب المرجانية الفارغة التي كانت في ما مضى تعجّ بالأسماك إلى غير ذلك من أسرار كوكبنا. يخبرنا هذا الكتاب، كيف يمكننا أن نمنح الطبيعة فرصة كي تجدد نفسها وتتكيّف وتتطور.
             
          </Typography>

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