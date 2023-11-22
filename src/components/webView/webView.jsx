
import { Link } from 'react-router-dom'
import './style.css'
import ChangeLangComp from '../changeLangComp/changeLangComp'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCheckSlice } from '../../redux/checkSlice';
import { memo } from 'react'

export default memo(function WebView(){
    const { t } = useTranslation();
   let checkSlice = useSelector(selectCheckSlice)
    

    return(<>
        <div className='header G-center'>
            <div className='G-appMainDiv header-1'>
               <Link to='/'> <img src='./images/logoGold.png' className='headerLogoImg G-textSelection' /></Link>
                <div className='header-1-1'>
                <Link to='/halls' className='headerLink'><span className='headerSliceSpan G-textSelection' style={{color:`${checkSlice.halls}`}}>{t('halls')}</span></Link>
                <Link to='/menu' className='headerLink'><span className='headerSliceSpan G-textSelection' style={{color:`${checkSlice.menu}`}}>{t('menu')}</span></Link>
                <Link to='/gallery' className='headerLink'><span className='headerSliceSpan G-textSelection' style={{color:`${checkSlice.gallery}`}}>{t('gallery')}</span></Link>
                <Link to='/aboutUs' className='headerLink'><span className='headerSliceSpan G-textSelection' style={{color:`${checkSlice.about}`}}>{t('aboutUs')}</span></Link>
                <Link to='/contact' className='headerLink'><span className='headerSliceSpan G-textSelection' style={{color:`${checkSlice.contact}`}}>{t('contact')}</span></Link>
                
                <ChangeLangComp />
                </div>
            </div>
        </div>
        <div className='headerBackCover'> </div>
        </>
    )
},(prevProps,nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
     return true
    }else{
     return false
    }
 })