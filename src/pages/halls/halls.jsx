
import './style.css'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'
import { selectHallsComp } from '../../redux/hallsCompSlice';
import HallsComp from '../../components/hallsComp/hallsComp';
import ChangeHallsComp from '../../components/changeHallsComp/changeHallsComp';
import HallsCompInfo from '../../components/hallsCompInfo/hallsCompInfo';
import { useEffect, useState } from 'react';
import { selectRoomItem } from '../../redux/hallsRoomItemSlice';
import { selectLanguageVal } from '../../redux/languageValSlice';

import { memo } from 'react';
import SliceMain from '../../components/sliceMain/sliceMain';

export default memo(function Halls(){
    const { t } = useTranslation();
    let hallsComp = useSelector(selectHallsComp)
    let roomItem = useSelector(selectRoomItem)
    let languageVal = useSelector(selectLanguageVal)

    
    const hallsCompChange = [
        {id : 0,item : t('hall1'),constItem : 'hall 1',constItem2 : 'hall1'},
        {id : 1,item : t('hall2'),constItem : 'hall 2',constItem2 : 'hall2'},
        {id : 2,item : t('hall3'),constItem : 'hall 3',constItem2 : 'hall3'},
        {id : 3,item : t('hall4'),constItem : 'hall 4',constItem2 : 'hall4'},
        {id : 4,item : t('hall5'),constItem : 'hall 5',constItem2 : 'hall5'},
        {id : 5,item : t('all'),item2 : 'all',constItem : 'all',constItem2 : 'all'},
    ]

    const hallsCompInfo = [
        {id : 0,itemName : t('hall1'),itemVal1 : t('hallsPeople1'),itemVal2 : t('hallsPrice1'),constItem : 'hall 1'},
        {id : 1,itemName : t('hall2'),itemVal1 : t('hallsPeople2'),itemVal2 : t('hallsPrice2'),constItem : 'hall 2'},
        {id : 2,itemName : t('hall3'),itemVal1 : t('hallsPeople3'),itemVal2 : t('hallsPrice3'),constItem : 'hall 3'},
        {id : 3,itemName : t('hall4'),itemVal1 : t('hallsPeople4'),itemVal2 : t('hallsPrice4'),constItem : 'hall 4'},
        {id : 4,itemName : t('hall5'),itemVal1 : t('hallsPeople5'),itemVal2 : t('hallsPrice5'),constItem : 'hall 5'},
    ]


  

    let [hallsCompInfoArr,setHallsCompInfoArr] = useState(hallsCompInfo)

    function hallsCompRefresh(){

        if(roomItem === 'all'){
            setHallsCompInfoArr([
                {id : 0,itemName : t('hall1'),itemVal1 : t('hallsPeople1'),itemVal2 : t('hallsPrice1'),constItem : 'hall 1'},
                {id : 1,itemName : t('hall2'),itemVal1 : t('hallsPeople2'),itemVal2 : t('hallsPrice2'),constItem : 'hall 2'},
                {id : 2,itemName : t('hall3'),itemVal1 : t('hallsPeople3'),itemVal2 : t('hallsPrice3'),constItem : 'hall 3'},
                {id : 3,itemName : t('hall4'),itemVal1 : t('hallsPeople4'),itemVal2 : t('hallsPrice4'),constItem : 'hall 4'},
                {id : 4,itemName : t('hall5'),itemVal1 : t('hallsPeople5'),itemVal2 : t('hallsPrice5'),constItem : 'hall 5'},
            ]) 
        }else if(roomItem === 'hall 1'){
            setHallsCompInfoArr([
                {id : 0,itemName : t('hall1'),itemVal1 : t('hallsPeople1'),itemVal2 : t('hallsPrice1'),constItem : 'hall 1'},
            ])
        }else if(roomItem === 'hall 2'){
            setHallsCompInfoArr([
                {id : 1,itemName : t('hall2'),itemVal1 : t('hallsPeople2'),itemVal2 : t('hallsPrice2'),constItem : 'hall 2'},
            ])
        }else if(roomItem === 'hall 3'){
            setHallsCompInfoArr([
                {id : 2,itemName : t('hall3'),itemVal1 : t('hallsPeople3'),itemVal2 : t('hallsPrice3'),constItem : 'hall 3'},
            ])
        }else if(roomItem === 'hall 4'){
            setHallsCompInfoArr([
                {id : 3,itemName : t('hall4'),itemVal1 : t('hallsPeople4'),itemVal2 : t('hallsPrice4'),constItem : 'hall 4'},
            ])
        }else if(roomItem === 'hall 5'){
            setHallsCompInfoArr([
                {id : 4,itemName : t('hall5'),itemVal1 : t('hallsPeople5'),itemVal2 : t('hallsPrice5'),constItem : 'hall 5'},
            ])
        }
    }

    useEffect(() => {
        hallsCompRefresh()
    },[roomItem,languageVal])
    
    
   

    return(
        <div className='halls'>
           <SliceMain sliceName='halls' />
            <div className='halls-2'>
                
          <ChangeHallsComp arr={hallsCompChange} />
                  
           
            </div>
            <div className='G-center'>
                <div className='G-appMainDiv halls-1'>
                    {
                        hallsComp.map((elm) => {
                          return <HallsComp key={elm.id} obj={elm}  />
                        })                        
                    }
                </div>
            </div>

            <div className='G-center'>
                <div className='G-appMainDiv halls-3'>
                  {
                    hallsCompInfoArr.map((elm) => {
                       return <HallsCompInfo key={elm.id} obj={elm} />
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