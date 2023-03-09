import '../Bollywood/bollywood.css'
import {data} from '../../APIDATA/Hollywoodapi'
import { useNavigate } from 'react-router-dom'
import Ads from '../../Commons/Ads'
import HollywoodTop from '../../TopPostData/Hollywoodtop'


const Hollywood =(props) =>{
    const value = props.title
    const navigate = useNavigate();

    const handleOnNavigate =(id , item)=>{
        navigate(`/hollywood/${id}` , {state : {item}})
    }
    return(
        <>
        <section>
        <div id='leftside'>
            <div id='main-container'>
                <h2 id='title'>{value}</h2>
                
                {data.map((item) =>{
                    return(
                        <div id='container1'>
                            <div id='container2' key={item.id}>
                                <img className='img' 
                                    onClick={()=> handleOnNavigate(item.id , item)} 
                                    src={item.url} 
                                    alt={"your data will show when connection is high ..."}
                                    width={300}
                                    height={200}
                                />
                                <div id='img-data'>
                                <div className='image-title'>{item.title}</div>
                                    <div className='image-content'>{item.content}</div>
                                    <div className='responsive'><span className='image1-category'>{item.category}{" /"} </span> <span className='image1-date'>{item.date}</span></div>
                                </div>
                                <br/> <hr/>
                                
                            </div>
                        </div>
                       
                    );
                })}
                <br/><br/>
                <span className="downarrow">Load more ....</span>
                <br/><br/><br/>
            </div>
        </div>

        <div id='right-side'>
            <HollywoodTop /> 
             <Ads/>
        </div>
    
    </section>
    </>

    )
} 

export default Hollywood