import './style.css'

function Footer(){
    return(
        <div className='footer'>
            <div className='G-center'>
            <div className='G-appMainDiv footer-1'>
                 <div className='footer-1-1'>
                    <img src='./images/logoBlack.png' className='footerLogoImg G-textSelection' />
                    <p className='footer-p1 G-textSelection'>
                    «Դոն Ֆիշ» ռեստորանային համալիր` ընտանեկան ու ընկերական փոքրիկ հավաքույթներից մինչև մեծ ու շքեղ հանդիսություններ, կորպորատիվ միջոցառումներ
                    </p>
                    <p className='footer-p1 G-textSelection'>
                    «Դոն Ֆիշ»` համեղ և շքեղ
                    </p>
                    <p className='footer-p1 G-textSelection'>
                    Աշխ․ ժամեր՝ ամեն օր՝ 10։00-00։00
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
                    Ախորժելի ուտեստներ, հիասքանչ միջավայր, բարձրակարգ սպասարկում. ահա մեր այցեքարտը…
                    </p>
                 </div>
            </div>
            </div>

            <div className='footer-2'>
                <p className='footer-2p1'>
                Copyright 2023 | Hill Zone LLC | All Rights Reserved | Website by Miasnik
                </p>
            </div>


          
        </div>
    )
}

export default Footer