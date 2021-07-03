import React, {useEffect, useState} from 'react'
import './usergallery.css'
import {useStateValue} from '../../StateProvider'
import axios from 'axios'
import Card from '../card/card'
import Nav from '../nav/navb'
import {useHistory} from 'react-router-dom'
import Banner from '../banner/banner'

function Usergallery() {

    const [{access, token, user}, dispatch] = useStateValue()
    const [albums, setalbums] = useState([])
    const history = useHistory()
    const [banner, setbanner] = useState({ title:'My Gallery', detail:'', imgurl:'images/tg6-1.jpg'})

    useEffect(() => {
        
         console.log('TEST')
         getALbums()
        return () => {
            
        }
    }, [])


    const getALbums = () =>{

        if(access!='unknown')
        {
            axios.get(`http://127.0.0.1:8000/api/album/userAlbum`,{
                headers:{
                 'Authorization': `Bearer ${token.access}`
                }
        })
        .then(res=>{console.log(res.data)
        setalbums(res.data)
        })
        .catch(error=>{console.log(error)
        history.push('/login')
        })
        }

    }


    
        

    


    return (
        <div>
            <Nav/>

            <Banner banner={banner}/>


<Card albums={albums}/>

  
  
            
        </div>
    )
}

export default Usergallery
