import { data3} from '../Utility/ApiCaller'
import { useNavigate } from 'react-router-dom'

const MiddleImage =()=>{
    const navigate = useNavigate();
   const handleOnNavigate=(id , item)=>{
    navigate(`/bollywood/${id}` , {state : {item}})
   }
    return(
        <div className='middle_img-allign'>
            {data3.map((item)=> {
                return(
                    <div className='middle_img_move' key={item.id}>
                        <img 
                        className='middle-img'
                        onClick={()=>{handleOnNavigate(item.id , item)}}
                        src={item.url}
                        alt={'404 not found..'}
                        width={780}
                        height={570}
                        />

                        <div className='main_middle_Text'>
                            <div className='middle-title'>{item.title}</div>
                            <div className='middle-about'>{item.category} / {item.date}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default MiddleImage