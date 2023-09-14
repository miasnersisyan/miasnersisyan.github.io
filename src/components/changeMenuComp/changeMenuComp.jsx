
import { useEffect, useState } from 'react'
import './style.css'
import { menuImages } from '../../data/menuImages'
import { useDispatch, useSelector } from 'react-redux'
import { changeMenuComp } from '../../redux/menuCompSlice'
import { useTranslation } from 'react-i18next';
import { selectLanguageVal } from '../../redux/languageValSlice'

function ChangeMenuComp({valueList}){
   let languageVal = useSelector(selectLanguageVal)
    const { t } = useTranslation();
    let [divVisible,setDivVisible] = useState('none')
    let [divVal,setDivVal] = useState(true)
    let [mainBtnText,setMainBtnText] = useState(t('all'))
    let [btnConstItem,setBtnConstItem] = useState(t('all'))

const dispatch = useDispatch()

useEffect(() => {
    setMainBtnText(t(btnConstItem))
},[languageVal])

    return(
    <div className='changeMenuCompDiv'>
        <button className='changeMenuComp' onClick={() => {
           if(divVal){
            setDivVisible('block')
            setDivVal(false)
           }else{
            setDivVisible('none')
            setDivVal(true)
           }
        }}>{mainBtnText}</button>
         <div className='changeMenuCompDiv-1' style={{display : `${divVisible}`}}>
               {
                valueList.map((elm) => {
                 return <button className='changeMenuCompDivBtn' onClick={() =>{
                    if(elm.constItem === 'all'){
                        dispatch(changeMenuComp(menuImages))
                    }else{
                        dispatch(changeMenuComp(menuImages.filter((val) => {
                         if(elm.constItem === val.imgType){
                            return val
                         }
                       })))
                    }
                    setMainBtnText(t(elm.constItem))
                    setDivVisible('none')
                    setBtnConstItem(elm.constItem)
                 }}>{elm.item}</button>
                })
               }
         </div>
        </div>
    )
}

export default ChangeMenuComp 
