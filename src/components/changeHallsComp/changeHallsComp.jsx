import { useWindowSize } from 'react-use';
import ChangeHallsCompMob from '../changeHallsCompMob/changeHallsCompMob';
import ChangeHallsCompWeb from '../changeHallsCompWeb/changeHallsCompWeb';
import { memo } from 'react'
export default memo(function ChangeHallsComp({arr}){
  const { width, height } = useWindowSize();
    
  if(width < 500){
    return <ChangeHallsCompMob arr={arr} />
  }else{
    return <ChangeHallsCompWeb arr={arr}  />
  }
},(prevProps,nextProps) => {
  if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
   return true
  }else{
   return false
  }
})