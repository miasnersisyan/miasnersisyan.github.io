import './style.css'
import { useTranslation } from 'react-i18next';
import { memo } from 'react'
export default memo(function DeliverSliceComp(){
    const { t } = useTranslation();
    const about6Style = {
        width : '100%',
        padding : '70px 0px',
        backgroundImage : 'url(./images/imgOut2.png)',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
     
        
    }
    return(
        <div className='about-6 about6Style' style={about6Style}>
        <h1 className='about-6header G-textSelection'>{t('deliverText1')}</h1>
        <p className='about-6p1 G-textSelection'>{t('deliverText2')}</p>
        <div className='G-center'>
        <a href='tel:+37455929290' className='about-6link'>
           <button className='about-6btn'>
           <span className='about-6btnSpan icon-phone'></span>
              (+374) 55 92 92 90
            </button>
        </a>
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