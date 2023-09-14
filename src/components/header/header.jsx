
import { useWindowSize } from 'react-use';
import './style.css'
import WebView from '../webView/webView';
import MobileView from '../mobileView/mobileView';

function Header(){
    const { width, height } = useWindowSize();
    
    if(width >= 950){
        return <WebView />
    }else{
        return <MobileView />
    }
   
}

export default Header