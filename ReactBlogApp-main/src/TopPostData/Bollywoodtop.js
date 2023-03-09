import {data} from '../APIDATA/Bollywoodapi'
import { useNavigate } from 'react-router-dom'
import '../Pages/Bollywood/bollywood.css'

const BollywoodTop=() =>{
   const navigate = useNavigate();

    const handleOnNavigate=(item , id)=>{
        navigate(`bollywood/${id}` , {state : {item}})
    }

    return(
        <div id='rightSideContent'>
            <div id="title">Top Post</div>
            <div className='right-post-gap'>
                <div>
                    <div id='topStartpost'>
                        <img 
                        src={"https://thumbs.dreamstime.com/b/bollywood-star-shahrukh-khan-showing-gratitude-to-his-fans-bhopal-bollywood-star-shahrukh-khan-fans-131126290.jpg"}
                        alt="data not opened .."
                        width={435}
                        height={250}
                        />
                        <div className='img-title'>{"Bollywood star Shahrukh khan with fans"}</div>
                        <span>{"Stage Perfomance"}<span>{"December 21,2021"}</span></span> 
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
                                height={150}
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
export default BollywoodTop