
import { changeSliderImgVal } from '../../redux/sliderImgValSlice'
import { changeSliderVisible } from '../../redux/sliderVisibleSlice'
import './style.css'
import { useDispatch } from 'react-redux'

function GalleryComp1({props}){
    const dispatch = useDispatch()


    return(
        <div className='gallerycomp1' data-aos="zoom-out">
           <img src={props.src} className='gallerycomp1Img1 G-textSelection' onClick={() => {
           
            dispatch(changeSliderImgVal(props.id))
            dispatch(changeSliderVisible('flex'))
           }} />
        </div>
    )
}

export default GalleryComp1