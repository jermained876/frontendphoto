import React, {useEffect, useState} from 'react'
import {Albumaccess} from '../accesscontrol/access'
import axios from 'axios'
import {useStateValue} from '../../StateProvider'
import { SRLWrapper } from "simple-react-lightbox";
import BackupIcon from '@material-ui/icons/Backup';
import {useHistory} from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import green from '@material-ui/core/colors/green';
import './album.css'

function Album({match}) {
    const url =match.params.id
   
    const [{access, token, user}, dispatch] = useStateValue()
    const [album, setalbum] = useState({})
    const [display, setdisplay] = useState(false)
    const history = useHistory()
    const [visibCon, setvisibCon] = useState(false)
    const [files, setFiles] = useState([])
    const [visbleAccess, setvisbleAccess] = useState(false)

    

    useEffect(() => {
         accesscontrol()
         accessVisible()
        console.log(url)
        return () => {
            
        }
    }, [])

    const accessVisible = () =>{

        if(access!='unknown')
        {
            axios.get(`http://127.0.0.1:8000/api/album/albumVisibleControl/${url}`,{
                headers:{
                 'Authorization': `Bearer ${token.access}`
                }
            })
            .then(res=>{
                console.log(res.data)
                setvisbleAccess(res.data)
                console.log('visible')
            })
            .catch(error=>console.log(error.message))

        }
    
    }


    const handleVisib = () =>{
        let cv = visibCon

        if(cv)
        {
            setvisibCon(false)
        }
        else{
            setvisibCon(true)
        }

    }

const changeFileDatabase = (data) =>{

    if(access!='unknown')
    {

    axios.get(`http://127.0.0.1:8000/api/file/changeFile/${data.id}/`,{
        headers:{
         'Authorization': `Bearer ${token.access}`
        }
    })
    .then(res=>{console.log(res.data)
        changeFileType(data)
    })
    .catch(error=>console.log(error))
    }
    
}   

const changeFileType = (data)=>{
    console.log(data.id +' '+data.type)

    let cfile = files

    let updatefile = cfile.map(cf=>{
        if(cf.id == data.id)
        {
            if(cf.type=='Open')
            {
                cf.type='Hidden'
                return cf
            }
            else{
                cf.type='Open'
                return cf
            }
        }
        else{
            return cf
        }
    })

    setFiles(updatefile )
    
}

  const openUploadPage = () =>{
      const path = '/upload/'+url
 history.push(path)

  }

  const images = files.map((file) => (

   
     <li key={file?.id}>
     {visibCon &&   <div className='imageVisible'> {file?.type =='Open' ? <VisibilityIcon style={{ color: green[500], fontSize:30 }} onClick={()=>changeFileDatabase(file)}/> : <VisibilityOffIcon color= 'secondary' style={{fontSize:30}} onClick={()=>changeFileDatabase(file)}/> } </div>}
     <img src={file?.url}  alt="A Toyota Previa covered in graffiti"  loading="lazy"/>
     
 </li>

      ))



  const getImages = () =>{
    console.log('Get Images')

      if(access=='unknown')
      {
        axios.get(`http://127.0.0.1:8000/api/file/albumfiles/${url}/`)
        .then(res=>{console.log(res.data)
        setFiles(res.data)
        })
        .catch(error=>console.log(error))
      }
      else{

        axios.get(`http://127.0.0.1:8000/api/file/albumfiles/${url}/`,{
            headers:{
             'Authorization': `Bearer ${token.access}`
            }
        })
        .then(res=>{console.log(res.data)
            setFiles(res.data)
        })
        .catch(error=>console.log(error))

      }
  }



    const accesscontrol = () =>{

     if(access=='unknown')   
     {
         console.log('unknown')

        axios.get(`http://127.0.0.1:8000/api/album/albumAccess/${url}`)
    .then(res=>{setdisplay(true)
    setalbum(res.data)
    console.log(res.data)
    getImages()

    })
    .catch(error=>console.log('push to login'))

     }
     else{
        console.log('known')

         console.log(token.access)

        axios.get(`http://127.0.0.1:8000/api/album/albumAccess/${url}`,{
            headers:{
             'Authorization': `Bearer ${token.access}`
            }
        })
    .then(res=>{
        setdisplay(true)
        setalbum(res.data)
        console.log(res.data)
        getImages()
    })
    .catch(error=>console.log('push to login3'))

     }
      



    }

    return (
        <div>
            
            {display && <div>

            <div class="wrapper dark-wrapper bg-image inverse-text mb-4" data-image-src={"https://unsplash.com/photos/bZZp1PmHI0E"}>
                    <div class="container inner pt-100 pb-100 text-center">
                    <h1 class="heading">{album?.name}</h1>
                    <p class="lead larger text-center mb-0">Minimalism meets photography</p>
                    {access=='admin' ? <div className='mt-2'> <button className='btn btn-sm btn-primary' onClick={openUploadPage}> <BackupIcon/>  Upload</button> </div>:'' }
                    </div>
            </div>

            

           {/*<!-- Gallery --> */}
           <SRLWrapper>
           <ul>
            
           
                {images}

            </ul>




             </SRLWrapper>
                        {/*<!-- Gallery -->*/}

                <div className='visibleControl'>
             {visbleAccess &&   <VisibilityIcon onClick={handleVisib} color={visibCon ? 'secondary':'action'} victor/>}

                </div>


<footer class="dark-wrapper inverse-text">
    <div class="sub-footer">
      <div class="container inner text-center"> <img src="#" srcset="style/images/logo-light.png 1x, style/images/logo-light@2x.png 2x" alt="" />
        <div class="space25"></div>
        <p>© 2018 Brailie. All rights reserved. Theme by elemis.</p>
        <div class="space30"></div>
        <ul class="social social-bg social-s">
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
          <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
          <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        </ul>
      </div>
     
    </div>
    
  </footer>




            

                </div>}
            
        </div>
    )
}

export default Album
