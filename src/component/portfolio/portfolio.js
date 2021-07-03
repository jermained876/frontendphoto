import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from '../card/card'
import Banner from '../banner/banner'
import Nav from '../nav/navb'

function Portfolio() {

    const [catergory, setcatergory] = useState([])
    const [banner, setbanner] = useState({ title:'Profolio', detail:'My work', imgurl:'images/bg17.jpg'})


    useEffect(() => {
        getAlbumTypes()

        return () => {
            
        }
    }, [])



    const getAlbumTypes= () =>{

        axios.get('http://127.0.0.1:8000/api/albumtype/all')
        .then(res=>{console.log(res.data)
        setcatergory(res.data)
        })
        .catch(error=>console.log(error.message))

    }

    return (
        <div>
        <Nav/>
           
        <Banner banner={banner}/>
        
        
            <Card albums={catergory}/>
          
          
                    
                </div>
    )
}

export default Portfolio
