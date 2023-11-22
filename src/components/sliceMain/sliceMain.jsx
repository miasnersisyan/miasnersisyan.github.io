import { memo } from "react";
import { useTranslation } from 'react-i18next';
import './style.css'
export default memo(function SliceMain({sliceName}){
    const { t } = useTranslation();

  return(
    <div className="sliceMain">
      <img src="./images/imgOut2.png" className="sliceMainImg" />
      <div className="sliceMain-1">
        <h1 className="G-mainHeader G-textSelection">
            {t(sliceName)}
        </h1>
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