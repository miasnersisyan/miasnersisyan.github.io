
import './style.css'
import { memo } from 'react'
export default memo(function HomeHallsComp({obj}){
    return (
        <div className='homehallscompdiv' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <img src={obj.src} className='homehallscompimg' />
        </div>
    )
},(prevProps,nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
     return true
    }else{
     return false
    }
 })