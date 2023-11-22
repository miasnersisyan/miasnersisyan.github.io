import { useWindowSize } from 'react-use';
import './style.css'
import AboutImg from '.././aboutImg/aboutImg';
import { aboutImgAnim } from '../../data/aboutImgAnim';
import { memo } from 'react'
export default memo(function AboutImgComp(){
    const { width } = useWindowSize();
    
    if(width >= 800){
        return (<div className='G-center aboutImgComp'>
        {
           aboutImgAnim.map((elm) => {
              return <AboutImg key={elm.id} obj={elm} />
           })
        }
       </div>)
    }else{
        return <></>
    }
   
},(prevProps,nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
     return true
    }else{
     return false
    }
 })