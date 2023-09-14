
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { changeSliderVisible, selectSliderVisible } from '../../redux/sliderVisibleSlice'
import { galleryImgs } from '../../data/galleryImages'
import { changeSliderImgVal, selectSliderImgVal } from '../../redux/sliderImgValSlice'
import { useState } from 'react'
import { useEffect } from 'react'


function GallerySlider(){

    let sliderVisible = useSelector(selectSliderVisible)
    let sliderImgVal = useSelector(selectSliderImgVal)
    const dispatch = useDispatch()
   
    return (
        <div className='gallerySlider' style={{display : `${sliderVisible}`}}>
            <span className='gallerySliderSpn1 icon-undo2' onClick={() => {
                if(sliderImgVal === 0){
                    dispatch(changeSliderImgVal(galleryImgs.length-1))
                }else{
                    dispatch(changeSliderImgVal(sliderImgVal - 1))
                }
            }}></span>
             <div className='gallerySliderImgDiv'>
               <img src={galleryImgs[sliderImgVal].src} className='gallerySliderImg' />
             </div>
            <span className='gallerySliderSpn2 icon-redo2'  onClick={() => {
                if(sliderImgVal === galleryImgs.length-1){
                    dispatch(changeSliderImgVal(0))
                }else{
                    dispatch(changeSliderImgVal(sliderImgVal + 1))
                }
            }}></span>
            <span className='gallerySliderClose icon-cross' onClick={() => {
                dispatch(changeSliderVisible('none'))
            }}></span>
        </div>
    )
}

export default GallerySlider
