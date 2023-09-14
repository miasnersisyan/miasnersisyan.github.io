
import { useState } from 'react'
import './style.css'
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { changeLanguageVal } from '../../redux/languageValSlice';

function ChangeLangComp(){
    const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const dispatch = useDispatch()

    let langInfo = [
        {name : 'HY',url : './images/amImg.png'},
        {name : 'EN',url : './images/enImg.png'},
        {name : 'RU',url : './images/ruImg.png'},
    ]

    let [language1,setLanguage1] = useState({
        name : 'HY',url : './images/amImg.png',val : 'hy'
    })
    let [language2,setLanguage2] = useState({
        name : 'EN',url : './images/enImg.png',val : 'en'
    })
    let [language3,setLanguage3] = useState({
        name : 'RU',url : './images/ruImg.png',val : 'ru'
    })
 
   let [langDiv,setLangDiv] = useState('none')
   let [langDivVal,setLangDivVal] = useState(true)
   
    return(
        <div className='changeLangDiv'>
          <button className='langButton' onClick={() => {
              if(langDivVal){
                setLangDiv('block')
                setLangDivVal(false)
              }else{
                setLangDiv('none')
                setLangDivVal(true)
              }
          }}>
            <img src={language1.url} className='langImg' />{language1.name}
          </button>
          <div className='selectLangDiv' style={{display : `${langDiv}`}}>
          <button className='langButton1' onClick={() => {
           let name1 = language1.name
           let url1 = language1.url
           let val1 = language1.val
           let name2 = language2.name
           let url2 = language2.url 
           let val2 = language2.val 
           let lng = language2.name.toLowerCase()
           changeLanguage(lng)
           setLanguage1({
              name : name2,
              url : url2,
              val : val2
           })
           setLanguage2({
              name : name1,
              url : url1,
              val : val1
           })

           dispatch(changeLanguageVal(language1.val))
           setLangDiv('none')
           setLangDivVal(true)
           
          }}>
            <img src={language2.url} className='langImg' />{language2.name}
          </button>
          <button className='langButton1' onClick={() => {
             let name1 = language1.name
             let url1 = language1.url
             let val1 = language1.val
             let name2 = language3.name
             let url2 = language3.url
             let val2 = language3.val 
             let lng = language3.name.toLowerCase()
             changeLanguage(lng)
             setLanguage1({
                name : name2,
                url : url2,
                val : val2
             })
             setLanguage3({
                name : name1,
                url : url1,
                val : val1
             })

             dispatch(changeLanguageVal(language1.val))
             setLangDiv('none')
             setLangDivVal(true)
             
          }}>
            <img src={language3.url} className='langImg' />{language3.name}
          </button>
          </div>
        </div>
    )
}

export default ChangeLangComp