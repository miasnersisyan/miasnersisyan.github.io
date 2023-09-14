
import './style.css'

function MenuComp({obj}){
    return(
        <div className='menuComp'  data-aos="zoom-out">
            <img src={obj.src} className='menuCompImg' />
        </div>
    )
}

export default MenuComp