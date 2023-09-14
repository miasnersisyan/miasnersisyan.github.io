
import './style.css'
import { useTranslation } from 'react-i18next';

function Contact(){
    const { t } = useTranslation();

    const divStyle = {
        width : '100%',
        padding : '70px 0px',
        backgroundImage : 'url(./images/imgOut2.png)',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
        backgroundAttachment : 'fixed'
    }

    return(
        <div className='contact'>
           <div style={divStyle}>
                <h1 className='G-mainHeader G-textSelection'>{t('contact')}</h1>
            </div>
            <div className='contact-1'>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1-1E5qna8foQqO5TvunIMmnu05K2XqHk&ehbc=2E312F&noprof=1" className='mapHillZone'></iframe>
            </div>
            <h1 className='contactHeader1 G-textSelection'>ՀՀ, ք. Երևան, Ալեք Մանուկյան 15</h1>

            <div className='contact-2'>
                 <h1 className='contactHeader2 G-textSelection'>ԿԱՊ</h1>
                 <p className='contactP1 G-textSelection'>
                    <span className='contactIcon1 G-textSelection icon-location'></span>
                    ՀՀ, ք. Երևան, Ալեք Մանուկյան 15
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
}

export default Contact