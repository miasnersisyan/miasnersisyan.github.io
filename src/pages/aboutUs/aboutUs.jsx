
import AboutSwiper from '../../components/aboutSwiper/aboutSwpier';
import './style.css'
import { useTranslation } from 'react-i18next';
import { aboutSwiper } from '../../data/aboutSwiper';
import DeliverSliceComp from '../../components/deliverSliceComp/deliverSliceComp';
import { Link } from 'react-router-dom';

import { useWindowSize } from 'react-use';
import AboutImgComp from '../../components/aboutImgComp/aboutImgComp';
import { memo } from 'react';
import SliceMain from '../../components/sliceMain/sliceMain';
export default memo(function AboutUs(){
    const { t } = useTranslation();

   
    const about3Style = {
        width : '100%',
        padding : '70px 0px',
        backgroundImage : 'url(./images/imgOut2.png)',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
        backgroundAttachment : 'fixed'
        
    }

    const { width } = useWindowSize();
    
    
    return(
        <div className='about'>
           <SliceMain sliceName='aboutUs' />
            <div className='about-1'>
               <h1 className='about-header1 G-textSelection'>HILLZONE</h1>
               <div className='G-center'>
                <p className='about-p1 G-textSelection'>
                {t('aboutText1')}
                </p>
               </div>

               <div className='G-center'>
                <div className='about-swiper-div'>
                    <AboutSwiper sliderArr={aboutSwiper} />
                </div>
               </div>

            </div>
            <div className='G-center'>
            <div className='about-2 G-appMainDiv'>
                <div className='about-2div1'>
                    <img src='./images/aboutMenuimg.png' className='about-2img G-textSelection' />
                </div>
                <div className='about-2div1'>
                    <p className='about-2p1 G-textSelection'>
                    {t('aboutText2')}
                    </p>
                    <Link to='/menu' className=''>
                    <button className='about-2btn'>{t('menu')}</button>
                    </Link>
                </div>
            </div>
            </div>
            <div className='about-3' style={about3Style}>
                <h1 className='about-3header G-textSelection'>{t('halls')}</h1>
                <div className='G-center'>
                    <div className='about-3div1'>
                        
                        <p className='about-3p1 G-textSelection'>
                      {t('aboutText4')}
                        </p>
                        <ul className='about-3ul '>
                            <li className='about-3ul-li G-textSelection'><span className='icon-checkmark check-spn'></span>{t('aboutCheck1')}</li>
                            <li className='about-3ul-li G-textSelection'><span className='icon-checkmark check-spn'></span>{t('aboutCheck2')}</li>
                            <li className='about-3ul-li G-textSelection'><span className='icon-checkmark check-spn'></span>{t('aboutCheck3')}</li>
                            <li className='about-3ul-li G-textSelection'><span className='icon-checkmark check-spn'></span>{t('aboutCheck4')}</li>
                            <li className='about-3ul-li G-textSelection'><span className='icon-checkmark check-spn'></span>{t('aboutCheck5')}</li>
                        </ul>
                        <div className='G-center'>
                        <Link to='/halls' className=''>
                            <button className='about-2btn'>{t('halls')}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='G-center'>
            <p className='about-4p1 G-textSelection'>
                  {t('aboutText3')}
                    </p>
            </div>
            <div className='G-center'>
                <div className='about-4 G-appMainDiv'>
                    
                </div>
            </div>

            <div className='G-center'>
                <div className='about-5'>
                    <img src='./images/about-5img.png' className='about-5img' />
                </div>
            </div>
            <AboutImgComp />
            
         <DeliverSliceComp />
        </div>
    )
},(prevProps,nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
     return true
    }else{
     return false
    }
 })