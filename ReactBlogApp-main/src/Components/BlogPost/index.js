import { useNavigate } from 'react-router-dom';
import {data , data1 , data2} from '../../Utility/ApiCaller'


function BlogPost(props){
const navigate = useNavigate();
const handleOnNavigate=(item , id)=>{
    navigate(`/bollywood/${id}` , {state : {item}})
}


 return(
        <>
        <div id='related-post'>{props.Title}</div>
        <div id='blog-container'>
            <div id='Blog'>
                {data.map((item) =>{
                    return(
                        <div key={item.id}>
                            <img 
                            className=''
                            onClick={()=> handleOnNavigate(item.id , item)}
                            src={item.url}
                            alt={'404 page not found'}
                            width={380}
                            height={210}
                            />

                            <div id='BlogContent' onClick={()=> handleOnNavigate(item.id , item)}></div>
                            <div className='img-title'>{item.title}</div>
                            <div className='img-content'>{item.content}</div>
                            <span className='img1-category'>{item.category}{" /"} </span> <span className='img1-date'>{item.date}</span>
                        </div>
                    )
                })}
             </div>
            
            <div id='Blog'>
                {data1.map((item) =>{
                    return(
                        <div key={item.id}>
                            <img 
                            className=''
                            onClick={()=> handleOnNavigate(item.id , item)}
                            src={item.url}
                            alt={'404 page not found'}
                            width={380}
                            height={210}
                            />

                            <div id='BlogContent' onClick={()=> handleOnNavigate(item.id , item)}></div>
                            <div className='img-title'>{item.title}</div>
                            <div className='img-content'>{item.content}</div>
                            <span className='img1-category'>{item.category}{" /"} </span> <span className='img1-date'>{item.date}</span>
                        </div>
                    )
                })}

            </div>

            <div id='Blog'>
                {data2.map((item) =>{
                    return(
                        <div key={item.id}>
                            <img 
                            className=''
                            onClick={()=> handleOnNavigate(item.id , item)}
                            src={item.url}
                            alt={'404 page not found'}
                            width={380}
                            height={210}
                            />

                            <div id='BlogContent' onClick={()=> handleOnNavigate(item.id , item)}></div>
                            <div className='img-title'>{item.title}</div>
                            <div className='img-content'>{item.content}</div>
                            <span className='img1-category'>{item.category}{" /"} </span> <span className='img1-date'>{item.date}</span>
                        </div>
                    )
                })}

            </div>

        </div>
        
        </>
    )
}
export default BlogPost;