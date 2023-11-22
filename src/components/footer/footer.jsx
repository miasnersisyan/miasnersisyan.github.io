import './style.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { memo } from 'react'
export default memo(function Footer(){
    const { t } = useTranslation();
    return(
        <div className='footer'>
            <div className='G-center'>
            <div className='G-appMainDiv footer-1'>
                 <div className='footer-1-1'>
                 <Link to='/'> 
                    <img src='./images/logoBlack.png' className='footerLogoImg G-textSelection' />
                   </Link>
                    <p className='footer-p1 G-textSelection'>
                   {t('footerText1')}
                    </p>
                   
                    <p className='footer-p1 G-textSelection'>
                    {t('footerText2')}
                    </p>
                 </div>
                 <div className='footer-1-1'>
                    <a className='footerLinkTag'
                     href='https://www.instagram.com/p/CmR-FLhs2y9/?img_index=1'
                     target='_blank'>

                    <div className='footerLinkImgDiv'>
                        <img src='./images/imgOut1.png' className='footerLinkImg G-textSelection' />
                        <div className='footerLinkImgDiv-1'>
                        <span className='icon-instagram footerIconSpn1'></span>
                        </div>
                    </div>

                    </a>
                 </div>
                 <div className='footer-1-1'>
                    <p className='footer-p1 G-textSelection'>
                    {t('footerText3')}
                    </p>
                 </div>
            </div>
            </div>

            <div className='footer-2'>
                <p className='footer-2p1'>
               Copyright 2023 | Hill Zone LLC | All Rights Reserved | <a href='https://github.com/miasnersisyan' target='blank' className='footer-2p1'> Website by Miasnik</a>
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