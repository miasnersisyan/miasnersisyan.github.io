import './style.css'

function HomeMenuComp({obj}){
    return (
        <div className='homemenucompdiv' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <img src={obj.src} className='homemenucompimg' />
        </div>
    )
}

export default HomeMenuComp