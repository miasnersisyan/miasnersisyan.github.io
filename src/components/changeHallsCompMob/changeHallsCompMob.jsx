import { hallsImages } from '../../data/hallsImages'
import { changeHallsComp } from '../../redux/hallsCompSlice'
import { changeRoomItem } from '../../redux/hallsRoomItemSlice'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { selectLanguageVal } from '../../redux/languageValSlice'
import { useTranslation } from 'react-i18next';
import { memo } from 'react'
export default memo(function ChangeHallsCompMob({arr}){
   
    const { t } = useTranslation();
     let [divVisible,setDivVisible] = useState('none')
     let [divVal,setDivVal] = useState(true)
     const dispatch = useDispatch()
     let [mainBtnText,setMainBtnText] = useState(t('all'))
     let languageVal = useSelector(selectLanguageVal)
   
     let [btnConstItem,setBtnConstItem] = useState(t('all'))

     useEffect(() => {
        setMainBtnText(t(btnConstItem))
    },[languageVal])
    
     return(
     <div className='changeHallsCompMob'>
         <button className='changeHallsCompMobMainBtn' onClick={() => {
            if(divVal){
             setDivVisible('block')
             setDivVal(false)
            }else{
             setDivVisible('none')
             setDivVal(true)
            }
         }}>{mainBtnText}</button>
          <div className='changeHallsCompMob-1' style={{display : `${divVisible}`}}>
                {
                   arr.map((elm) => {
                    return <button className="changeHallsCompMobBtn" key={elm.id}  onClick={() => {
                        dispatch(changeHallsComp(hallsImages.filter((val) => {
                           if(val.roomName === elm.constItem || elm.item2 === 'all'){
                            return val
                           }
                        })))
                        dispatch(changeRoomItem(elm.constItem))
                        setMainBtnText(t(elm.constItem2))
                        setDivVisible('none')
                        setBtnConstItem(elm.constItem2)
                       
                      }}>{elm.item}</button>
                   })
                }
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