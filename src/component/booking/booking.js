import React, {useState} from 'react'
import Nav from '../nav/navb'
import Banner from '../banner/banner'

function Booking() {

    const [banner, setbanner] = useState({ title:'Booking', detail:'My work', imgurl:'images/bg15.jpg'})

    return (
        <div>
             <Nav/>
           
              <Banner banner={banner}/>  


            
        </div>
    )
}

export default Booking
