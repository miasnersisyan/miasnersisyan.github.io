
import './style.css'

function HallsComp({obj}){
    return(
        <div className='hallsCompDiv'  data-aos="zoom-out">
            <img src={obj.src} className='hallsCompImg G-textSelection' />
        </div>
    )
}

export default HallsComp