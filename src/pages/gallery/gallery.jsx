

import './style.css'
import { useTranslation } from 'react-i18next';
import { galleryImgs } from '../../data/galleryImages';
import GalleryComp1 from '../../components/galleryComp1/galleryComp1';
import { memo } from 'react';
import SliceMain from '../../components/sliceMain/sliceMain';
export default memo(function Gallery(){
    const { t } = useTranslation();

   
    return(
        <div className='gallery'>
            <SliceMain sliceName='gallery' />
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
},(prevProps,nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
     return true
    }else{
     return false
    }
 })