import {data , data1} from '../../Utility/ApiHomeTop'
import { useNavigate } from 'react-router-dom'
import './TopImage.css'

function TopImage(){
    const navigate = useNavigate();
    const handleOnNavigate=(id , item) =>{
        navigate(`/bollywood/${id}` , {state :{item}})
    }

    return(
        <div id='pic-main-cont'>
            <div id='pic1'>
                {data.map((item)=>{
                    return(
                        <div id='img1' key={item.id}>
                            <img 
                            className='image1'
                            src={item.url}
                            alt={'404 page not found..'}
                            onClick={() => handleOnNavigate(item.id , item)}
                            width={1000}
                            height={600}
                            />
                            <div id='imgs1'>
                            <div id="img1-text1">{item.title}</div>
                            <div id='img1-text2'>Travel {" /"} {item.date}</div>
                             </div>                                 

                        </div>
                    )
                })}
            </div>
            
            <div>
            <div id='pic2'>
                {data1.map((item)=>{
                    return(
                        <div id='img2' key={item.id}>
                            <img 
                            className='image2'
                            src={item.url}
                            alt={'404 page not found..'}
                            onClick={() => handleOnNavigate(item.id , item)}
                            width={410}
                            height={250}
                            />

                            <div id='imgs2'>
                            <div id="img2-text1">Title is here</div>
                            <div id='img2-text2'>Travel {" /"} {item.date}</div>
                            </div>

                        </div>
                    )
                })}
            </div>

            <div id='pic3 '>
                {data1.map((item)=>{
                    return(
                        <div id='img2' key={item.id}>
                            <img 
                            className='image2'
                            src={item.url}
                            alt={'404 page not found..'}
                            onClick={() => handleOnNavigate(item.id , item)}
                            width={410}
                            height={250}
                            />

                            <div id='imgs2'>
                            <div id="img2-text1">Title is here</div>
                            <div id='img2-text2'>Travel {" /"} {item.date}</div>
                             </div>

                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default TopImage