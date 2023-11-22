
import { hallsImages } from '../../data/hallsImages'
import { changeHallsComp } from '../../redux/hallsCompSlice'
import { changeRoomItem } from '../../redux/hallsRoomItemSlice'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { memo } from 'react'
export default memo(function ChangeHallsCompWeb({arr}){

   
   const dispatch = useDispatch()
return(
    <div>
    {

        arr.map((elm) => {
            return(
              <span className='changeHallsCompSpan G-textSelection' onClick={() => {
                  dispatch(changeHallsComp(hallsImages.filter((val) => {
                  if(val.roomName === elm.constItem || elm.item2 === 'all'){
                      return val
                  }
                  })))
                  dispatch(changeRoomItem(elm.constItem))
              }}>{elm.item}</span>
            )
         })
         
       
    }
    </div>
)

},(prevProps,nextProps) => {
    if(JSON.stringify(prevProps) === JSON.stringify(nextProps)){
     return true
    }else{
     return false
    }
 })