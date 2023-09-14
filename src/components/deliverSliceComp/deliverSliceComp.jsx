import './style.css'

function DeliverSliceComp(){
    const about6Style = {
        width : '100%',
        padding : '70px 0px',
        backgroundImage : 'url(./images/imgOut2.png)',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        backgroundPosition : 'center',
     
        
    }
    return(
        <div className='about-6 about6Style' style={about6Style}>
        <h1 className='about-6header G-textSelection'>«Դոն Ֆիշ» խանութ-սրահից մթերքը կարող եք նաև պատվիրել</h1>
        <p className='about-6p1 G-textSelection'>Կապվե՛ք մեզ հետ, և մենք կառաքենք:</p>
        <div className='G-center'>
        <a href='tel:+37455929290' className='about-6link'>
           <button className='about-6btn'>
           <span className='about-6btnSpan icon-phone'></span>
              (+374) 55 92 92 90
            </button>
        </a>
        </div>
    </div>
    )
}

export default DeliverSliceComp