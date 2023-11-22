
import { useWindowSize } from 'react-use';
import './style.css'
import WebView from '../webView/webView';
import MobileView from '../mobileView/mobileView';
import { memo } from 'react'
export default memo(function Header(){
    const { width } = useWindowSize();
    
    if(width >= 950){
        return <WebView />
    }else{
        return <MobileView />
    }
   
},(prevProps,nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
     return true
    }else{
     return false
    }
 })