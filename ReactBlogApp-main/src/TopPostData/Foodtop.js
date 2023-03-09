import {data} from '../APIDATA/Foodapi'
import { useNavigate } from 'react-router-dom'
import '../Pages/Bollywood/bollywood.css'

const FoodTop=() =>{
    const navigate = useNavigate();
 
     const handleOnNavigate=(item , id)=>{
         navigate(`food/${id}` , {state : {item}})
     }
 
     return(
         <div id='rightSideContent'>
             <div id="title">Top Post</div>
             <div className='right-post-gap'>
                 <div>
                     <div id='topStartpost'>
                         <img 
                         src={"https://thumbs.dreamstime.com/z/food-10399889.jpg"}
                         alt="data not opened .."
                         width={435}
                         height={250}
                         />
                         <div className='img-title'>{'Healthy food in heart and cholesterol diet concept'}</div>
                         <span>{"Food"}<span>{"September 20, 2015."}</span></span> 
                     </div>
                 </div>
 
                 {data.map((item) =>{
                     return(
                         <div id='con-right-gap'>
                             <div id='con-right-display' key={item.id}>
                                 <img 
                                 className='topBelowPost'
                                 onClick={()=> handleOnNavigate(item.id , item)}
                                 width={200}
                                 height={130}
                                 src={item.url}
                                 alt={"your data will show in high range..."}
                                 />
                                 <div>
                                 <div className='img-title1'>{item.title}</div>
                                     <div className='img-content1'>{item.content}</div>
                                     <span className='img1-category'>{item.category}{" /"}</span> <span className='img1-date'>{item.date}</span>
                                 </div>
                             </div>
                         </div>
                     )
                 })}
             </div>
 
         </div>
     )
 }
 export default FoodTop