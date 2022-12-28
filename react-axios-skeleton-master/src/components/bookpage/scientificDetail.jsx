import BookDetail from "./bookDetail";
import {scientificDetail} from "./scientific"
import scientific from "./scientific"
const ScientificDetail=()=>{
    return(
        <div  Key={scientific.id}>

        
            <BookDetail
            
             id={scientific.id}
            image={scientific.image}
            BookAuthor={scientific.BookAuthor}
            BookName={scientific.BookName}
            Price={scientific.Price}
            aboutBook={scientific.aboutBook}
            aboutAuthor={scientific.BookAuthor}
            />
         
      

        </div>
    )
}
export default ScientificDetail;