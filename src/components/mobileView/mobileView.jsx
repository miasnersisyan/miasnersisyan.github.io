
import './style.css'
import { Link } from 'react-router-dom'
import ChangeLangComp from '../changeLangComp/changeLangComp'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCheckSlice } from '../../redux/checkSlice';
import { memo } from 'react'
export default memo(function MobileView(){

    const { t } = useTranslation();
    let checkSlice = useSelector(selectCheckSlice)
    

    let [mobileVals,setMobileVals] = useState({
        scale : 0,
        zIndex : -1,
        background : 'white'
    })
    let [currentVal,setCurrentVal] = useState(true)

    function closeMobileLinksTab(){
        setMobileVals({
            scale : 0,
            zIndex : -1,
            background : 'white'
        })
        setCurrentVal(true)
    }


   return(
     <div className='mobileview'>
          <Link to='/' onClick={() => {
            setMobileVals({
              scale : 0,
              zIndex : -1,
              background : 'white'
          })
          }}> <img src='./images/logoGold.png' className='mobileLogoImg G-textSelection' /></Link>
          
          <button className='mobileBtn icon-menu' style={{
            background : `${mobileVals.background}`
           }} onClick={() => {
              if(currentVal){
                setMobileVals({
                    scale : 1,
                    zIndex : 50,
                    background : 'silver'
                })
                setCurrentVal(false)
              }else{
                setMobileVals({
                    scale : 0,
                    zIndex : -1,
                    background : 'white'
                })
                setCurrentVal(true)
              }
           }}></button>

          <div className='mobileviewposdiv' style={{
            transform : `scale(${mobileVals.scale},1)`,
            zIndex : `${mobileVals.zIndex}`
          }}>
            <div className='mobileviewposdiv-1'>
                <div className='G-center mobileviewcurrentlink'>
                <Link to='/halls' className='mobileviewlink G-textSelection'  style={{color:`${checkSlice.halls}`}} onClick={closeMobileLinksTab}>{t('halls')}</Link>
                </div>
                <div className='G-center mobileviewcurrentlink'>
                <Link to='/menu' className='mobileviewlink G-textSelection'  style={{color:`${checkSlice.menu}`}} onClick={closeMobileLinksTab}>{t('menu')}</Link>
                </div>
                <div className='G-center mobileviewcurrentlink'>
                <Link to='/gallery' className='mobileviewlink G-textSelection'  style={{color:`${checkSlice.gallery}`}} onClick={closeMobileLinksTab}>{t('gallery')}</Link>
                </div>
                <div className='G-center mobileviewcurrentlink'>
                <Link to='/aboutUs' className='mobileviewlink G-textSelection'  style={{color:`${checkSlice.about}`}} onClick={closeMobileLinksTab}>{t('aboutUs')}</Link>
                </div>
                <div className='G-center mobileviewcurrentlink'>
                <Link to='/contact' className='mobileviewlink G-textSelection'  style={{color:`${checkSlice.contact}`}} onClick={closeMobileLinksTab}>{t('contact')}</Link>
                </div>
                <div className='G-center mobileviewcurrentlink'>
                <ChangeLangComp />
                </div>
            </div>
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