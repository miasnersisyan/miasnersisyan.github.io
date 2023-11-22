
import './style.css'
import { memo } from 'react'
export default memo(function HallsComp({obj}){
    return(
        <div className='hallsCompDiv'  data-aos="zoom-in">
            <img src={obj.src} className='hallsCompImg G-textSelection' />
        </div>
    )
},(prevProps,nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
     return true
    }else{
     return false
    }
 })