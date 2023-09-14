import AboutSwiper from '../../components/aboutSwiper/aboutSwpier';
import './style.css'
import { useTranslation } from 'react-i18next';
import { homeSwiper } from '../../data/homeSwiper';
import { homeHalls } from '../../data/homeHalls';
import HomeHallsComp from '../../components/homeHallsComp/homeHallsComp';
import { homeMenu } from '../../data/homeMenu';
import HomeMenuComp from '../../components/homeMenuComp/homeMenuComp';
import DeliverSliceComp from '../../components/deliverSliceComp/deliverSliceComp';
import { Link } from 'react-router-dom';
function Home(){
    const { t } = useTranslation();

    return(
        <div className='home'>
            <div className='home-1'>
               <img src='./images/imgOut1.png' className='home-1Img' />
               <div className='home-1DarkDiv'>
                  <div className='home-1DarkDiv-1'>
                  <h1 className='home-1Header1 G-textSelection'>{t('welcome')}</h1>
                    <h1 className='home-1Header2 G-textSelection'>HILLZONE</h1>
                    <h1 className='home-1Header3 G-textSelection'>{t('entertainment')}</h1>
                    <div className='G-center'>
                    <Link to='/halls' className=''>
                    <button className='home-1Btn'><span className='home-1BtnSp1'>{t('halls')}</span></button>
                    </Link>
                    </div>
                 
                  </div>
               </div>
            </div>

            <div className='G-center '>
               <div className='G-appMainDiv home-2'>
                  <div className='home-2Div1' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
                     <p className='home-2p1 G-textSelection'>
                     {t('welcome')}
                     </p>
                     <h1 className='home-2header1 G-textSelection'>
                        HILLZONE
                     </h1>
                     <p className='home-2p2 G-textSelection'>
                        «Դոն Ֆիշ» ռեստորանային համալիրն իր հյուրընկալ դռներն է բացում բոլոր նրանց համար, ովքեր ցանկանում են կտրվել քաղաքային աղմուկից և վայելել հաճելի ժամանց, համեղ խոհանոց և բարձրաճաշակ երաժշտություն։
                        Ձեր կարևորագույն տոնական միջոցառումների անցկացումը վստահե՛ք մեզ. մենք երաշխավորում ենք բարձրակարգ սպասարկում։
                        Այցելե՛ք «Դոն Ֆիշ» և անմոռանալի դարձրե՛ք ձեր օրը մեր շքեղ և ինքնատիպ սրահներում, որոնք կգոհացնեն անգամ ամենաքմահաճ հաճախորդներին։
                        Սիրով սպասում ենք։
                     </p>
                  </div>
                  <div className='home-2Div1' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
                       <AboutSwiper sliderArr={homeSwiper}  />
                  </div>
               </div>
            </div>
            <div className='G-center'>
                <div className='homeMainDiv G-appMainDiv'></div>
            </div>

            <div className='home-3 '>
                <h1 className='home-3Header1 G-textSelection'>{t('halls')}</h1>
                <div className='G-center'>
                <div className='home-3-1 G-appMainDiv '>
                    {
                        homeHalls.map((elm) =>{
                          return <HomeHallsComp key={elm.id} obj={elm} />
                        })
                    }
                </div>
                </div>
                <div className='G-center'>
                <Link to='/halls' className=''>
                    <button className='home-3Btn'>{t('seeAll')}</button>
                    </Link>
                </div>
            </div>
            <div className='G-center'>
                <div className='homeMainDiv G-appMainDiv'></div>
            </div>
            <div className='home-3 '>
            <h1 className='home-3Header1 G-textSelection'>{t('menu')}</h1>
            <div className='G-center'>
                <div className='home-3-1 G-appMainDiv '>
                     {
                        homeMenu.map((elm) =>{
                              return <HomeMenuComp key={elm.id} obj={elm} />
                        })
                     }
                </div>
            </div>
            <div className='G-center'>
            <Link to='/menu' className=''>
                    <button className='home-3Btn'>{t('seeAll')}</button>
                    </Link>
                </div>
            </div>
            
            <DeliverSliceComp />
        </div>
    )
}

export default Home