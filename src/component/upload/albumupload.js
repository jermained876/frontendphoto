import React, {useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import { useForm } from "react-hook-form";
import '../../css/upload.css'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios'
import {useStateValue} from '../../StateProvider'

function Albumupload({match}) {
    const url =match.params.id
    const {register,handleSubmit,errors} = useForm()
    const Cloud_Url = 'https://api.cloudinary.com/v1_1/jd999dawkins/image/upload'
    const Cloud_preset = 'af428fcj'
    

    

    const [files, setFiles] = useState([])
    const [album, setalbum] = useState({})
    const [display, setdisplay] = useState(false)
    const [{access, token, user}, dispatch] = useStateValue()

    useEffect(() => {
        accesscontrol()
        loadAlbumData()
        return () => {
            
        }
    }, [])
 
   // control access
   const accesscontrol = () =>{
   
    axios.get('http://127.0.0.1:8000/api/adminapi/authOnly',{
        headers:{
         'Authorization': `Bearer ${token.access}`
        }
    })
    .then(res=>{
        console.log(res.data)
        setdisplay(res.data)
    })
    .catch(error=>console.log(error))
    
   }

   // loading album data
   const loadAlbumData = () =>{

   axios.get(`http://127.0.0.1:8000/api/album/${url}`)
   .then(res=>{
       console.log(res.data)
       setalbum(res.data)
   })
   .catch(error=>console.log(error))

   }

    //upload files to cloudinary
   const uploadCloud = (file) =>{
 console.log('Here we are')
  

    let formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', Cloud_preset)

    axios.post(Cloud_Url,formData,{
        hearders:{
            'content-Type' : 'application/x-www-form-urlencoded'
        }
    })
    .then((res)=>{console.log(res.data)
    axios.post('http://127.0.0.1:8000/api/file/create',{
        album : album.id,
        asset_id : res.data.asset_id,
        bytes: res.data.bytes,
        created_at: res.data.created_at,
        etag: res.data.etag,
        format: res.data.format,
        height: res.data.height,
        original_filename: res.data.original_filename,
        public_id: res.data.public_id,
        resource_type: res.data.type,
        secure_url: res.data.secure_url,
        signature: res.data.signature,
        url: res.data.url,
        width: res.data.width,
        
    })
    .then(res=>console.log(res.data))

    
    })
    .catch()
}

//handle loading

const handleLoadingButton = () =>{
    files.map(data=>uploadCloud(data))
    
}


    //drop zone
    const { getRootProps, getInputProps } = useDropzone({
       
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            console.log('test')

            acceptedFiles.map((file) =>
            setFiles(files => [...files, 
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
              ])
            )
             
           
    
        }
    }
  
    )

    const onChangeUploadFile = (data)=>{
        console.log(data)
    }
    

 const images = files.map((file) => (

 <div className='col-md-3'>  
<div class="card mb-1" style={{width: '100%' }}>
<img class="card-img-top"  src={file.preview} style={{ width: "100%" }} alt="preview" />
<div class="card-body">
   <a href="#" class="btn btn-sm btn-danger">Remove</a>
</div>
</div>
</div>
   ))



    return (
        <div className='Upload_Page'>
            <div>Upload</div>
            {display && <div>display Upload</div>}
            <div>{url}</div>
            <div>{album?.name}</div>
            <div className='row'>
            <div class="image-upload-wrap offset-md-3 col-md-6" {...getRootProps()}>
                        <input class="file-upload-input" type='file' disabled onchange={onChangeUploadFile} accept="image/*" />
                        <div class=" drag-box">
                                            <div className='drag-text '>
                                                    <i class="ion-ios-cloud-upload" {...getInputProps()}></i>
                                                    <h3> Drop image here ot click to upload</h3>
                                            </div>
                        </div>
            </div>
            </div>
              

                    <div className='row mt-5'>
                    {images}

                    <div id="mybutton">
                    <button class="feedback" onClick={handleLoadingButton} >Save and Close</button>
                    </div>
                    
             </div>

                    

        </div>
    )
}

export default Albumupload
