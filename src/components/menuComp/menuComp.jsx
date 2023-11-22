
import './style.css'
import { memo } from 'react'
export default memo(function MenuComp({obj}){
    return(
        <div className='menuComp'  data-aos="zoom-in">
            <img src={obj.src} className='menuCompImg' />
        </div>
    )
},(prevProps,nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
     return true
    }else{
     return false
    }
 })