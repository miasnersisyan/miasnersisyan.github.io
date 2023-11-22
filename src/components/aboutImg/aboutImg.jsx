
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { changeAboutImg, selectAboutImg } from '../../redux/aboutImgSlice'
import { useState } from 'react'
import { useEffect } from 'react'
import { memo } from 'react'
export default memo(function AboutImg({obj}){
   const aboutImg =  useSelector(selectAboutImg)
   const dispatch = useDispatch()

   function refresh(){
      dispatch(changeAboutImg(aboutImg.map((elm) => {
         if(elm.id === obj.id){
            return {id : elm.id,imgWidth : 300}
         }else{
            return {id : elm.id,imgWidth : 30}
         }
      })))
   }


 

    return(
        <div className='aboutImg'>
         <div className='aboutImgD1'>
            <img src={obj.src} className='aboutImg1' style={{width : `${aboutImg[obj.id].imgWidth}px`}} />
         </div>
         <div className='aboutImgD1'>
           <img src={obj.src} className='aboutImg2' style={{width : `${aboutImg[obj.id].imgWidth}px`}} onClick={() => {
              refresh()
           }} />
         </div>
        </div>
    )
},(prevProps,nextProps) => {
   if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
    return true
   }else{
    return false
   }
})


