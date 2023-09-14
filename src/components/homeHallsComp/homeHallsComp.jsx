
import './style.css'

function HomeHallsComp({obj}){
    return (
        <div className='homehallscompdiv' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <img src={obj.src} className='homehallscompimg' />
        </div>
    )
}

export default HomeHallsComp