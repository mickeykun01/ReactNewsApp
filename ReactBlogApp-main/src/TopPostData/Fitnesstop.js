import {data} from '../APIDATA/Fitnessapi'
import { useNavigate } from 'react-router-dom'
import '../Pages/Bollywood/bollywood.css'

const FitnessTop=() =>{
    const navigate = useNavigate();
 
     const handleOnNavigate=(item , id)=>{
         navigate(`fitness/${id}` , {state : {item}})
     }
 
     return(
         <div id='rightSideContent'>
             <div id="title">Top Post</div>
             <div className='right-post-gap'>
                 <div>
                     <div id='topStartpost'>
                         <img 
                         src={"https://thumbs.dreamstime.com/z/working-out-home-online-fitness-course-workout-video-personal-trainer-service-phone-health-sport-mobile-app-144081381.jpg"}
                         alt="data not opened .."
                         width={435}
                         height={250}
                         />
                         <div className='img-title'>{'Working out at home with online fitness course, workout video or personal trainer service in phone. Health or sport mobile app.'}</div>
                         <span>{"healthy Food"}<span>{"September 20, 2015."}</span></span> 
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
 export default FitnessTop