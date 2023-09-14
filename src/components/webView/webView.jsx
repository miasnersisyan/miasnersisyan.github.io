
import { Link } from 'react-router-dom'
import './style.css'
import ChangeLangComp from '../changeLangComp/changeLangComp'
import { useTranslation } from 'react-i18next';


function WebView(){
    const { t } = useTranslation();

    

    return(<>
        <div className='header G-center'>
            <div className='G-appMainDiv header-1'>
               <Link to='/'> <img src='./images/logoGold.png' className='headerLogoImg G-textSelection' /></Link>
                <div className='header-1-1'>
                <Link to='/halls' className='headerLink'><span className='headerSliceSpan G-textSelection'>{t('halls')}</span></Link>
                <Link to='/menu' className='headerLink'><span className='headerSliceSpan G-textSelection'>{t('menu')}</span></Link>
                <Link to='/gallery' className='headerLink'><span className='headerSliceSpan G-textSelection'>{t('gallery')}</span></Link>
                <Link to='/aboutUs' className='headerLink'><span className='headerSliceSpan G-textSelection'>{t('aboutUs')}</span></Link>
                <Link to='/contact' className='headerLink'><span className='headerSliceSpan G-textSelection'>{t('contact')}</span></Link>
                
                <ChangeLangComp />
                </div>
            </div>
        </div>
        <div className='headerBackCover'> </div>
        </>
    )
}

export default WebView