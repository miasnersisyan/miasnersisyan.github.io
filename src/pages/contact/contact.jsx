
import './style.css'
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import SliceMain from '../../components/sliceMain/sliceMain';
export default memo(function Contact(){
    const { t } = useTranslation();

    

    return(
        <div className='contact'>
           <SliceMain sliceName='contact' />
            <div className='contact-1'>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1-1E5qna8foQqO5TvunIMmnu05K2XqHk&ehbc=2E312F&noprof=1" className='mapHillZone'></iframe>
            </div>
            <h1 className='contactHeader1 G-textSelection'>{t('contactText1')}</h1>

            <div className='contact-2'>
                 <h1 className='contactHeader2 G-textSelection'>{t('contact')}</h1>
                 <p className='contactP1 G-textSelection'>
                    <span className='contactIcon1 G-textSelection icon-location'></span>
                  {t('contactText1')}
                 </p>
                
                    <p className='contactP1 G-textSelection'>
                    <span className='contactIcon1 G-textSelection icon-phone'></span>
                    <a href='tel:+37455929290' className='contactLink1'>
                    (+374) 55 92 92 90
                    </a>
                    </p>
                    <p className='contactP1 G-textSelection'>
                    <span className='contactIcon1 G-textSelection icon-envelop'></span>                   
                    donfishrestaurant@gmail.com
                    </p>
                 
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