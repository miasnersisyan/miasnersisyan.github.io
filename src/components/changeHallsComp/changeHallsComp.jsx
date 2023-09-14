import { useWindowSize } from 'react-use';
import ChangeHallsCompMob from '../changeHallsCompMob/changeHallsCompMob';
import ChangeHallsCompWeb from '../changeHallsCompWeb/changeHallsCompWeb';

function ChangeHallsComp({arr}){
  const { width, height } = useWindowSize();
    
  if(width < 500){
    return <ChangeHallsCompMob arr={arr} />
  }else{
    return <ChangeHallsCompWeb arr={arr}  />
  }
}

export default ChangeHallsComp