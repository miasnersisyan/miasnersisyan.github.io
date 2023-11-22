
import { changeSliderImgVal } from '../../redux/sliderImgValSlice'
import { changeSliderVisible } from '../../redux/sliderVisibleSlice'
import './style.css'
import { useDispatch } from 'react-redux'
import { memo } from 'react'
export default memo(function GalleryComp1({props}){
    const dispatch = useDispatch()


    return(
        <div className='gallerycomp1' data-aos="zoom-in">
           <img src={props.src} className='gallerycomp1Img1 G-textSelection' onClick={() => {
           
            dispatch(changeSliderImgVal(props.id))
            dispatch(changeSliderVisible('flex'))
           }} />
        </div>
    )
},(prevProps,nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
     return true
    }else{
     return false
    }
 })