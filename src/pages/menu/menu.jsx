
import { useSelector } from 'react-redux';
import ChangeMenuComp from '../../components/changeMenuComp/changeMenuComp';
import './style.css'
import { useTranslation } from 'react-i18next';
import { selectMenuComp } from '../../redux/menuCompSlice';
import MenuComp from '../../components/menuComp/menuComp';
import { memo } from 'react';
import SliceMain from '../../components/sliceMain/sliceMain';
export default memo(function Menu(){
    const { t } = useTranslation();

    let menuComp = useSelector(selectMenuComp)

 

    const menuCompChange = [
        {id : 0,item : t('snack'),constItem : 'snack',},
        {id : 1,item : t('salads'),constItem : 'salads'},
        {id : 2,item : t('pasta'),constItem : 'pasta'},
        {id : 3,item : t('pizza'),constItem : 'pizza'},
        {id : 4,item : t('sandwich burger'),constItem : 'sandwich burger'},
        {id : 5,item : t('hot dishes'),constItem : 'hot dishes'},
        {id : 6,item : t('dessert'),constItem : 'dessert'},
        {id : 7,item : t('drinks'),constItem : 'drinks'},
        {id : 8,item : t('coffee tea'),constItem : 'coffee tea'},
        {id : 9,item : t('charms'),constItem : 'charms'},
        {id : 10,item : t('hookah'),constItem : 'hookah'},
        {id : 11,item : t('beer snacks'),constItem : 'beer snacks'},
        {id : 12,item : t('bar'),constItem : 'bar'},
        {id : 13,item : t('all'),constItem : 'all'},
    ]


    return(
        <div className='menu'>
           <SliceMain sliceName='menu' />
           
           <div className='G-center'>
            <div className='G-appMainDiv menu-1'>
                <div className='G-center'>
                    <ChangeMenuComp valueList={menuCompChange}  />
                </div>
                <div className='menu-2'>
                    {
                        menuComp.map((elm) => {
                           return <MenuComp key={elm.id} obj={elm} />
                        })
                    }
                </div>
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