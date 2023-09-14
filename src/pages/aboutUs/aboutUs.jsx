
import AboutSwiper from '../../components/aboutSwiper/aboutSwpier';
import './style.css'
import { useTranslation } from 'react-i18next';
import { aboutSwiper } from '../../data/aboutSwiper';
import DeliverSliceComp from '../../components/deliverSliceComp/deliverSliceComp';
import { Link } from 'react-router-dom';
function AboutUs(){
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
    const about3Style = {
        width : '100%',
        padding : '70px 0px',
        backgroundImage : 'url(./images/imgOut2.png)',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
        backgroundAttachment : 'fixed'
        
    }
    
    return(
        <div className='about'>
           <div style={divStyle}>
                <h1 className='G-mainHeader G-textSelection'>{t('aboutUs')}</h1>
            </div>
            <div className='about-1'>
               <h1 className='about-header1 G-textSelection'>HILLZONE</h1>
               <div className='G-center'>
                <p className='about-p1 G-textSelection'>
                «Դոն Ֆիշ» ռեստորանային համալիրն իր հյուրընկալ դռներն է բացում նրանց համար, ովքեր ցանկանում են կտրվել քաղաքային աղմուկից ու վայելել համեղ ուտեստներ և բարձրակարգ ժամանց: Առաջարկում ենք Ձեր կյանքի կարևոր և հիշարժան օրերի միջոցառումներն անցկացնել «Դոն Ֆիշ»-ում։ Մենք երաշխավորում ենք համեղ ուտեստներ, բարձրակարգ սպասարկում և տրամադրող միջավայր:
«Դոն Ֆիշ» ռեստորանային համալիրում գործում է նաև ընդարձակ ավտոկայանատեղի։
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
                    «Դոն Ֆիշ»-ն առաջարկում է հայկական, ռուսական, վրացական, եվրոպական և այլ խոհանոցների լավագույն ուտեստների, խմիչքների լայն տեսականի: Այստեղ կարող եք համտեսել շեֆ-խոհարարի պատրաստած բացառիկ համով ֆիրմային ուտեստները:

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
                        «ԴՈՆ ՖԻՇ»-Ն ԱՌԱՋԱՐԿՈՒՄ Է ՏԱՐԲԵՐ ՄԻՋՈՑԱՌՈՒՄՆԵՐԻ ՀԱՄԱՐ ՆԱԽԱՏԵՍՎԱԾ ՍՐԱՀՆԵՐ՝ ԲԱԶՄԱԶԱՆ ԵՒ ՉԿՐԿՆՎՈՂ ՀԱՐԴԱՐԱՆՔՈՎ։
                        </p>
                        <p className='about-3p1 G-textSelection'>
                        «ԴՈՆ ՖԻՇՈՒՄ» ԳՈՐԾՈՒՄ ԵՆ՝
                        </p>
                        <ul className='about-3ul '>
                            <li className='about-3ul-li G-textSelection'><span className='icon-checkmark check-spn'></span>հանդիսությունների շքեղ մեծ սրահ՝ մինչև 120 անձի համար</li>
                            <li className='about-3ul-li G-textSelection'><span className='icon-checkmark check-spn'></span>ինքնատիպ ու ոճային լուծումներով փոքր սրահ՝ մինչև 30 անձի համար</li>
                            <li className='about-3ul-li G-textSelection'><span className='icon-checkmark check-spn'></span>յուրօրինակ հարդարմամբ առանձնասրահներ՝ մինչև 15 անձի համար</li>
                            <li className='about-3ul-li G-textSelection'><span className='icon-checkmark check-spn'></span>բացօթյա բար-սրճարան:</li>
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
                    Հանդիսությունների մեծ սրահում տոնական բարձր տրամադրությունը կապահովեն կենդանի երաժշտության ուղեկցությամբ բարձրակարգ կատարումները: Իսկ առանձնասենյակներում տեղադրված սմարթ հեռուստացույցի միջոցով կարող եք ընտրել ձեր ճաշակի երաժշտություն:
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
         <DeliverSliceComp />
        </div>
    )
}

export default AboutUs