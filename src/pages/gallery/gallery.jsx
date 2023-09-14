

import './style.css'
import { useTranslation } from 'react-i18next';
import { galleryImgs } from '../../data/galleryImages';
import GalleryComp1 from '../../components/galleryComp1/galleryComp1';
function Gallery(){
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
        <div className='gallery'>
            <div style={divStyle}>
                <h1 className='G-mainHeader G-textSelection'>{t('gallery')}</h1>
            </div>
            <div className='G-center'>
            <div className='G-appMainDiv gallery-1'>
                {
                  galleryImgs.map((elm) => {
                    return <GalleryComp1 key={elm.id} props={elm} />
                  })
                }
            </div>
            </div>

        </div>
    )
}

export default Gallery