
import './style.css'

function HallsCompInfo({obj}){
  return(
    <div className='hallsCompInfo'  data-aos="zoom-out">
            <p className='hallsCompInfo-p1 G-textSelection'>{obj.itemName}</p>
        <div className='hallsCompInfo-box1'>
            <p className='hallsCompInfo-p2 G-textSelection'>{obj.itemVal1}</p>
            <p className='hallsCompInfo-p2 G-textSelection'>{obj.itemVal2}</p>
        </div>
    </div>
  )
}

export default HallsCompInfo
