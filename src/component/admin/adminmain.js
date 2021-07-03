import { Fastfood } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import './adminmain.css'
import Dashboard from './dashboard'
import Album from './albumadmin/albumadmin'
import axios from 'axios'
import AlbumAdd from './albumadmin/albumadd'
import AlbumView from './albumadmin/albumview'
import AlbumUpload from './albumadmin/albumupload'
import AlbumUser from './albumadmin/albumuser'
import Userall from './useradmin/userall'
import AlbumAccessAdd from './albumadmin/albumaccessadd'
import Userform from './useradmin/userform'
import UserAccessform from './useradmin/useraccess'
import Albumform from './albumadmin/albumform'
import {useStateValue} from '../../StateProvider'
import {useDropzone} from 'react-dropzone'

function Adminmain() {

const [{access, token, user}, dispatch] = useStateValue()    
const [panel, setpanel] = useState({dashboard:false,album:false,category:false, user:false})
const [albumpanel, setalbumpanel] = useState({albumview:false, albumupload:false,albumall:false,albumform:false,albumdetail:false,albumaccess:false, albumaccessadd:true, albumedit:false})
const [albums, setalbums] = useState([])
const [albumAccessAddSearch, setalbumAccessAddSearch] = useState({album:0, username:'',first_name:'', last_name: '', email: ''})
const [albumAccessAddResult, setalbumAccessAddResult] = useState([])
const [albumAccessAddData, setalbumAccessAddData] = useState([])
const [albumFiles, setalbumFiles] = useState([])
const [albumUpFiles, setalbumUpFiles] = useState([])
const [albumUploadFiles, setalbumUploadFiles] = useState([])
const [albumFormData, setalbumFormData] =useState({id:0, albumname:'', albumSelectedType:0, albumType:[],albumSelectedAccess:'',albumAccess:[], albumdate:'2021-05-24'})
const [albumUserData, setalbumUserData] = useState({})
const [userpanel, setuserpanel] = useState({usermanager:false, userform:false,userformEdit:false, userdetail:false, useraccess:false})
const [systemusers, setsystemusers] = useState([])
const [userform, setuserform] = useState({id: 0, username:'',is_superuser:false,first_name:'',last_name:'', email:"", access:''})
const [userAccessData, setuserAccessData] = useState({})
const [userAccessSearchData, setuserAccessSearchData] = useState([])

useEffect(() => {
    
    return () => {
        
    }
}, [])

//*all album component  functions

//clear album panel

const clearAlbumPanel =() =>{

    let calbumpanel = albumpanel
    calbumpanel.albumall = false
    calbumpanel.albumform = false
    calbumpanel.albumdetail = false
    calbumpanel.albumaccessadd = false
    calbumpanel.albumaccess = false
    calbumpanel.albumedit = false
    calbumpanel.albumview = false
    calbumpanel.albumupload = false

    setalbumpanel({...albumpanel, calbumpanel})
    clearAlbumForm()
    clearAlbumAddSearch()
    clearAlbumAddResult()
    console.log('Hellokkk')
}

const clearAlbumForm = () =>{
    let calbumFormData = albumFormData

    calbumFormData.id =0
    calbumFormData.albumname='' 
    calbumFormData.albumSelectedType=0 
    calbumFormData.albumType=[]
    calbumFormData.albumSelectedAccess=''
    calbumFormData.albumAccess=[] 
    calbumFormData.albumdate='2021-05-24'

    setalbumFormData({...albumFormData, calbumFormData})

}

const clearAlbumAddSearch= () =>{
let calbumAccessAddSearch = albumAccessAddSearch
calbumAccessAddSearch.album = 0
calbumAccessAddSearch.username = ''
calbumAccessAddSearch.first_name = ''
calbumAccessAddSearch.last_name = ''
calbumAccessAddSearch.email = ''
setalbumAccessAddSearch({...albumAccessAddSearch,calbumAccessAddSearch})
  
}

const albumAccessUpdateSearch = (data) =>{

    console.log(data.target.name)
    console.log(data.target.value)
    const target_name = data.target.name
    const value= data.target.value

    let calbumAccessAddSearch = albumAccessAddSearch

    switch (target_name) {
        case 'User-Username':
            calbumAccessAddSearch.username = value
           
            
            break;
        case 'User-Email':
            calbumAccessAddSearch.email = value
            break;
        case 'User-Firstname':
            calbumAccessAddSearch.first_name = value
            break;
        case 'User-Lastname':
            calbumAccessAddSearch.last_name = value
            break;
    
        default:
            break;
    }

    setalbumAccessAddSearch({...albumAccessAddSearch,calbumAccessAddSearch})

}

const albumAccessHandleSearchButton = () =>{

    console.log(albumAccessAddSearch.album)
    axios.get(`http://127.0.0.1:8000/api/user/searchAlbumUsers/${albumUserData.id}/${albumAccessAddSearch.username==''? '*':albumAccessAddSearch.username}/${albumAccessAddSearch.first_name=='' ? '*':albumAccessAddSearch.first_name}/${albumAccessAddSearch.last_name==''?'*':albumAccessAddSearch.last_name}/${albumAccessAddSearch.email==''?'*':albumAccessAddSearch.email}`)
    .then(res=>{console.log(res.data)
       setalbumAccessAddData(res.data)
    })
    .catch()
}

const albumAccessAddOpen = (album) =>{
{/* close the the user acess panel  and open the album acesss panel*/}



let calbumpanel = albumpanel
calbumpanel.albumaccess = false
calbumpanel.albumaccessadd = true
setalbumpanel({...albumpanel,calbumpanel})

}

const albumAccessAddClose = () =>{

    let calbumpanel = albumpanel
calbumpanel.albumaccess = true
calbumpanel.albumaccessadd = false
setalbumpanel({...albumpanel,calbumpanel})
clearAlbumAddSearch()
clearAlbumAddResult()
    
}


const clearAlbumAddResult = () =>{
   
    setalbumAccessAddData([])
}




const updateAlbumState = () =>{

axios.get('http://127.0.0.1:8000/api/album/all')
.then(res=>{console.log(res.data)
setalbums(res.data)
})
.catch()
}


//*album add 



const updateAlbumAdd =() =>{

    updateAlbumType()
    updateAlbumAccess()

    let calbumpanel = albumpanel
     clearAlbumPanel()
     calbumpanel.albumform = true
     setalbumpanel({...albumpanel, calbumpanel})


}

//**************************view album 

//* Open album view

const openAlbumView =() =>{

    clearAlbumPanel ()
    let calbumpanel = albumpanel
    calbumpanel.albumview = true
    setalbumpanel({...albumpanel, calbumpanel})
   
}

//* handle open album view click

const handleOpenAlbumView = (album)=>{
    setalbumUserData(album)
    getAlbumImages(album)
    openAlbumView()

}

//* get album images


const getAlbumImages = (album) =>{
    console.log('Get Images')


        axios.get(`http://127.0.0.1:8000/api/file/albumfiles/${album.slug}/`,{
            headers:{
             'Authorization': `Bearer ${token.access}`
            }
        })
        .then(res=>{console.log(res.data)
            setalbumFiles(res.data)
        })
        .catch(error=>console.log(error))

      
  }



//*******************************End Album View */



//*******************************   Upload Files  */

//*open albumupload

const openAlbumUpload =() =>{

    
    let calbumpanel = albumpanel
    calbumpanel.albumupload = true
    console.log('change shit')
    setalbumpanel({...albumpanel, calbumpanel})
   
}

//* handle open album view click

const handleOpenAlbumUpload = (album)=>{
   console.log('herer')
    let calbumpanel = albumpanel
    calbumpanel.albumupload = true
    setalbumpanel({...albumpanel, calbumpanel})

}

const handleCloseAlbumUpload = (album)=>{
    
    let calbumpanel = albumpanel
    calbumpanel.albumupload = false

    setalbumpanel({...albumpanel, calbumpanel})
 
 }



 //drop zone
 const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
       
    accept: "image/*",
    onDrop: (acceptedFiles) => {
        console.log(acceptedFiles)

        acceptedFiles.map(file=> uploadCloud(file))
        
            /*
        let calbumUploadFiles = albumUploadFiles

        

        console.log(calbumUploadFiles)

        setalbumUploadFiles({...albumUploadFiles,calbumUploadFiles})


       acceptedFiles.map((file) =>
         setalbumUpFiles(files => [...files, 
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
          ])
        )
         
      */

    }
}

)

/* upload t */





const Cloud_Url = 'https://api.cloudinary.com/v1_1/jd999dawkins/image/upload'
const Cloud_preset = 'af428fcj'

const DeleteCloud = (file) =>{
    console.log(file)
     
   
       let formData = new FormData()
       formData.append('file', file)
       formData.append('upload_preset', Cloud_preset)
       formData.append('public_id', file.public_id)
   
       axios.delete(Cloud_Url,formData)
       .then(res=>console.log('pass'))

        
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
               album : albumUserData.id,
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
           .then(res=>{console.log(res.data)
            getAlbumImages()
        })
       
           
           })
           .catch()
       }



//* upload remove image */


const handleUploadRemove = (index) =>{

    
    console.log(index)
    let calbumUpFiles = albumUpFiles
   
    //calbumUpFiles.splice(index,1)
    console.log(albumUpFiles)
    acceptedFiles.splice(index,1)
    
    setalbumUpFiles([])

    acceptedFiles.map((file) =>
         setalbumUpFiles(files => [...files, 
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
          ])
        )
   
}




//***********************************End Upload Files */



const updateAlbumAccess = () =>{
    
    let calbumFormData = albumFormData

    axios.get('http://127.0.0.1:8000/api/albumaccess/all')
    .then((res)=>{
        console.log(res.data)
        calbumFormData.albumAccess =res.data
        setalbumFormData({...albumFormData, calbumFormData})
    })
    .catch()
}

const updateAlbumType = () =>{
let calbumFormData = albumFormData

    axios.get('http://127.0.0.1:8000/api/albumtype/all')
    .then((res)=>{
        console.log(res.data)
        calbumFormData.albumType =res.data
        setalbumFormData({...albumFormData, calbumFormData})
    })
    .catch()

}

const handleAlbumAddForm = (data) =>{

    const formName = data.target.name
    const formValue = data.target.value
    let calbumFormData = albumFormData
     

    switch (formName) {
        case 'Album-Name':
            calbumFormData.albumname= formValue
            console.log(formValue)
            break;
        case 'Album-Type':
            calbumFormData.albumSelectedType= formValue
            console.log(formValue)
            break;
        case 'Album-Date':
            calbumFormData.albumdate= formValue
            console.log(formValue)
            break;
        case 'Album-Access':
            calbumFormData.albumSelectedAccess= formValue
            console.log(formValue)
             break;
    
        default:
            break;
    }

    setalbumFormData({...albumFormData,calbumFormData})

}


const albumAddDatabase = () =>{

    console.log('Update Datebase')
    console.log(albumFormData.albumname)
    console.log(albumFormData.albumSelectedType)
    console.log(albumFormData.albumdate)

    axios.post('http://127.0.0.1:8000/api/album/create',{
        name:albumFormData.albumname,
        type:albumFormData.albumSelectedType,
        access:albumFormData.albumSelectedAccess,
        event_date: albumFormData.albumdate

    })
    .then((res)=>{
        console.log(res.data)
        
    })
    .catch()
    
}


const handleAlbumFilter= (data) =>{

    let search_value= data.target.value

    axios.get(`http://127.0.0.1:8000/api/album/all?search=${search_value}`)
    .then(res=>{console.log(res.data)
    setalbums(res.data)
    })
    .catch()
}

const albumHandleEditButton = (data) =>{

    console.log('edit '+ data.name)
    clearAlbumPanel()
    
    updateAlbumType()
    updateAlbumAccess()
    updateAlbumForm(data)
    let calbumpanel = albumpanel
     
     calbumpanel.albumform = true
     calbumpanel.albumedit=true
     setalbumpanel({...albumpanel, calbumpanel})

}

const updateAlbumForm = (data)=>{
let calbumFormData = albumFormData
calbumFormData.id = data.id
calbumFormData.albumname = data.name
calbumFormData.albumSelectedAccess = data.albumSelectedAccess
calbumFormData.albumdate = data.event_date
calbumFormData.albumSelectedType = data.type
calbumFormData.albumSelectedAccess = data.access.id
console.log(data)

setalbumFormData({...albumFormData,calbumFormData})


}

const albumUpdateDatabase = () =>{

    console.log('Update Datebase')
    console.log(albumFormData.albumname)
    console.log(albumFormData.albumSelectedType)
    console.log(albumFormData.albumdate)

    axios.patch(`http://127.0.0.1:8000/api/album/${albumFormData.id}/edit`,{
        name:albumFormData.albumname,
        type:albumFormData.albumSelectedType,
        access:albumFormData.albumSelectedAccess,
        event_date: albumFormData.albumdate

    })
    .then((res)=>{
        console.log(res.data)
        cancelButton()
        
    })
    .catch()
    
}



const albumHandleUsersButton = (data) =>{
    console.log(data)
    clearAlbumPanel()
    updateAlbumUserData(data)


    let calbumpanel = albumpanel
     calbumpanel.albumaccess = true
     setalbumpanel({...albumpanel, calbumpanel})

}

const updateAlbumUserData = (data)=>{
setalbumUserData(data)

}

const albumHandleDeleteButton = (data) =>{
    console.log('delete '+ data.name )

}

const cancelButton = () =>{
    const cpanel = panel
    cpanel.album= true
    let calbumpanel = albumpanel
    clearAlbumPanel()
    calbumpanel.albumall = true
    setpanel({...panel, cpanel})
    setalbumpanel({...albumpanel, calbumpanel})
    updateAlbumState()
}

const  addAlbumUserButton = (user) =>
{
    console.log(user)
    console.log(albumUserData)


    axios.post('http://127.0.0.1:8000/api/albumuser/create',{
        album : albumUserData.id,
        user: user.id
    })
    .then (res=>{

        albumAccessHandleSearchButton()
    let addData = res.data
    addData.user = user

    //copy albumUserData
    let calbumUserData = albumUserData
    calbumUserData.albumuser_album.push(addData)
    setalbumUserData(calbumUserData)
    
    })

    .catch()

}

const removeAlbumUserButton = (user) =>{

    console.log(user)
    console.log(albumUserData)

   axios.delete(`http://127.0.0.1:8000/api/albumuser/${user.id}/delete`)
   .then(res=>{

    //copy albumUserData
    let calbumUserData = albumUserData
    let albumuser = albumUserData.albumuser_album
     let count =0
    let removeaccount =0
    console.log('here')

    albumuser.map(item=> {
        if(item.id == user.id)
        {
            removeaccount = count
            console.log('here 2')
        }
        count++
    })
    
    console.log(removeaccount)
    albumuser.splice(removeaccount,1)

    console.log(albumuser)
      calbumUserData.albumuser_album = albumuser
      console.log(calbumUserData)  
    setalbumUserData({...albumUserData,calbumUserData})
   


    })
   .catch()
}



const changeImageVisible = (item) =>{

    console.log(token)

    /* http://127.0.0.1:8000/api/file/changeFile/23/ */


    axios.get(`http://127.0.0.1:8000/api/file/changeFile/${item.id}/`,{
        headers:{
         'Authorization': `Bearer ${token.access}`
        }
    })
    .then(res=>{console.log(res.data)
    
        let copy_albumFiles = albumFiles

        let update = copy_albumFiles.map(file=>{
            if(file.id!=item.id)
            {
            return file
          }
          else{
              file.type = res.data.type
              return file
          }
        })

        setalbumFiles(update)


    
    })
    .catch()


   

    
}



//end of album component 



// user panel component starts here

const clearUserPanel =()=>{

let copy_userpanel = userpanel

copy_userpanel.usermanager=false 
copy_userpanel.userform=false
copy_userpanel.userformEdit=false
copy_userpanel.userdetail=false
copy_userpanel.useraccess= false
setuserpanel({...userpanel, copy_userpanel})
console.log('crazy tets')
let userAccessClear = []
setuserAccessSearchData([])
}

const clearUserForm = () =>{
    let copy_userform = userform
    copy_userform.id= 0
    copy_userform.username=''
    copy_userform.first_name= ''
    copy_userform.last_name = ''
    copy_userform.email = ''
    copy_userform.access=''
setuserform({...userform, copy_userform})
}

const openUserPanelFormAdd =()=>{

    clearUserPanel()
    clearUserForm()
    let copy_userpanel = userpanel
    copy_userpanel.userform=true
    copy_userpanel.userformEdit=false 
    setuserpanel({...userpanel, copy_userpanel})

    
}


const openUserPanelFormEdit =()=>{

    clearUserPanel()
    let copy_userpanel = userpanel
    copy_userpanel.userform=true
    copy_userpanel.userformEdit=true 
    setuserpanel({...userpanel, copy_userpanel})
    
}

const handleEditUserButton = (data) =>{
    console.log(data.username)

    let copy_userform = userform
        copy_userform.id= data.id
        copy_userform.username=data.username
        copy_userform.first_name= data.first_name
        copy_userform.last_name = data.last_name
        copy_userform.email = data.email
       
        if (data.is_superuser)
        {
            copy_userform.access='Admin'
        }
        else {
            copy_userform.access=data.groups[0].name
        }
         
setuserform({...userform, copy_userform})
openUserPanelFormEdit()
}
    


const openUserPanel = ()=>{
    clearUserPanel()
    
    let copy_userpanel = userpanel
    copy_userpanel.usermanager= true
    setuserpanel({...userpanel, copy_userpanel})
    getAllUser()

}


const getAllUser = () =>{

    axios.get('http://127.0.0.1:8000/api/userapi/all')
    .then((res)=>{console.log(res.data)
    
    setsystemusers(res.data)
    })
    .catch()

}

const handleUserFormChange =(data)=>{

    let copy_userform  = userform
    const field_name = data.target.name
    const value = data.target.value
    

    switch (field_name) {
             case 'User-Username':
                copy_userform.username = value         
            break;
             case 'User-Firstname':
                copy_userform.first_name = value          
            break;    
            case 'User-Lastname':
                copy_userform.last_name = value          
            break;    
            case 'User-Email':
                copy_userform.email = value          
            break;    
            case 'User-Access':
                copy_userform.access = value
                
            break;       
            default:
            break;
    }
    setuserform({...userform, copy_userform})
}

const handleUserFormSubmit =()=>{

    console.log('Submit data')
    addUserDatabase()

}


const addUserDatabase = () =>{

    axios.post('http://127.0.0.1:8000/api/userapi/create',
    {
        username: userform.username,
        first_name: userform.first_name,
        last_name: userform.last_name,
        email: userform.email,
        access:userform.access,
    })
    .then(res=>{
        console.log(res.data)
        openUserPanel()
    })
    .catch()
}

const openAccessForm = (data)=>{

    setuserAccessData(data)
    clearUserPanel()
    let copy_userpanel = userpanel
    copy_userpanel.useraccess= true
    setuserpanel({...userpanel, copy_userpanel})

}


const accessFormSearchAlbum = (data)  =>{
console.log(data.target.value)
let search_value = data.target.value
if(search_value.length>0)
{
axios.get(`http://127.0.0.1:8000/api/album/all?search=${search_value}`)
.then((res)=>{console.log(res.data)
setuserAccessSearchData(res.data)
filterAccessList()
})
.catch()
}
else setuserAccessSearchData([])

}

const filterAccessList = () =>{
    console.log('user data')
   console.log(userAccessData)
   userAccessData.albumuser_user.map(test=>{console.log(test)
userAccessSearchData.map(k=>console.log(k))

})
   console.log('search')
   console.log(userAccessSearchData)
}



const accessFormAddNew = (data)=>{
    console.log('here testing')
    console.log(data)
    console.log(userAccessData.id)
    
 

  
    axios.post('http://127.0.0.1:8000/api/albumuser/create',{
        album:data.id,
        user:userAccessData.id
    })
    .then(res=>{console.log(res.data)
        let push = {id : res.data.id, album: {id: data.id, name: data.name, slug: data.slug, pub_date: data.pub_date, event_date: data.event_date}}

    updateAcessData (push)
    })
    .catch()
}


const updateAcessData = (push) =>{

    let copy_systemusers = systemusers
    let update_systemusers = copy_systemusers.map(user=>
        {
            if (user.id==userAccessData.id)
            {
            user.albumuser_user.push(push)
            }
            return user
        }
        )

        setsystemusers(update_systemusers)
}


const handleRemoveAccess = (data) =>{

console.log(data)
axios.delete(`http://127.0.0.1:8000/api/albumuser/${data.id}/delete`)
.then(res=>{console.log('DELETED')
updateRemoveAccessData(data.id)
})
.catch()


}


const updateRemoveAccessData = (id) =>{

    let copy_systemusers = systemusers
    let update_systemusers = copy_systemusers.map(user=>
        {
            if (user.id==userAccessData.id)
            {
            let copy_useralbum = user.albumuser_user
            let count =0
            let removeaccount =0
            let update_useralbum = copy_useralbum.map((a)=>{
                if (a.id == id)
                {
                 removeaccount = count
                }
                count++
                
            })

            
            delete copy_useralbum[removeaccount]
            
            }
            return user
        }
        )

        setsystemusers(update_systemusers)
}


//user component ends here


const handlePanelButton = (data) =>{
    clear()
    let cpanel = panel
    let panelbutton = data.target.name
  
    switch (panelbutton) {
        case 'album':
            cpanel.album= true
            let calbumpanel = albumpanel
            clearAlbumPanel()
            calbumpanel.albumall = true
            setpanel({...panel, cpanel})
            setalbumpanel({...albumpanel, calbumpanel})
            updateAlbumState()
            break;
    
        case 'category':
            cpanel.category=true
            setpanel({...panel, cpanel})
             break;
             
        case 'user':
           clear() 
            cpanel.user= true
            
            setpanel({...panel, cpanel})
            openUserPanel()
            break;
    
     case 'dashboard':
            cpanel.dashboard= true
            setpanel({...panel, cpanel})
            break;
        
        default:
            break;
    }
    

   

}

const clear = () =>{

    let cpanel = panel

    cpanel.album= false
    cpanel.category = false
    cpanel.user = false
    cpanel.dashboard=false

    setpanel({...panel, cpanel})

}

    return (
        <div class="wrapper ">
    <div class="sidebar" data-color="purple" data-background-color="white">
      {/*<!--
      Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

      Tip 2: you can also add an image using data-image tag
      -->*/}
      <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text logo-mini">
          ADMIN PANEL
        </a>
       
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <button className='btn btn-red  selectbutton' disabled ={panel.dashboard? true:false} name='dashboard' onClick={(Event)=>handlePanelButton(Event)}>Dashboard</button>
          <button className='btn btn-red  selectbutton'  name='album' onClick={(Event)=>handlePanelButton(Event)}>Albums</button>
          <button className='btn btn-red  selectbutton'  name='category' onClick={(Event)=>handlePanelButton(Event)}>Gategory</button>
          <button className='btn btn-red  selectbutton'>Admin</button>
          <button className='btn btn-red  selectbutton' >Admin</button>
          <button className='btn btn-red  selectbutton' name ='user' onClick={(Event)=>handlePanelButton(Event)}>User</button>
          
        </ul>
      </div>
    </div>
    <div class="main-panel">
      
      

      <div class="content">
        <div class="container-fluid">

               
               
                {panel.album && <div>
                {/* <AlbumAdd albumAdd ={albumAdd} handleAlbumAddForm={handleAlbumAddForm} albumAddDatabase={albumAddDatabase}/>*/}
                
                {albumpanel.albumall && <Album albums={albums} view={handleOpenAlbumView} edit={albumHandleEditButton} remove={albumHandleDeleteButton} users= {albumHandleUsersButton}  handleAlbumFilter ={handleAlbumFilter} updateAlbumAdd={updateAlbumAdd}/>}

                {albumpanel.albumform && <Albumform cancel={cancelButton}  albumFormData ={albumFormData} handleAlbumAddForm={handleAlbumAddForm} albumAddDatabase={albumAddDatabase} albumUpdateDatabase={albumUpdateDatabase} edit={albumpanel.albumedit}/> }
                {albumpanel.albumaccess && <AlbumUser removeAlbumUserButton={removeAlbumUserButton} albumAccessAddOpen={albumAccessAddOpen} albumUserData ={albumUserData}/>}
                {albumpanel.albumaccessadd && <AlbumAccessAdd albumUserData={albumUserData} addAlbumUserButton={addAlbumUserButton} albumAccessAddData={albumAccessAddData} albumAccessAddClose={albumAccessAddClose} albumAccessAddResult={albumAccessAddResult} albumAccessHandleSearchButton ={albumAccessHandleSearchButton } albumAccessAddSearch={albumAccessAddSearch}  albumAccessUpdateSearch={ albumAccessUpdateSearch}/>}
                {albumpanel.albumview && <AlbumView  changeImageVisible={changeImageVisible} DeleteCloud={DeleteCloud} albumFiles={albumFiles} albumupload ={albumpanel.albumupload} getRootProps={getRootProps} getInputProps={getInputProps} handleOpenAlbumUpload={handleOpenAlbumUpload} handleCloseAlbumUpload={handleCloseAlbumUpload} albumUserData ={albumUserData}/>}
               

                </div>}

         {panel.category && <div>Category</div>}
         {panel.user && <div> <h1>User</h1>

            <button className='btn btn-success' onClick={openUserPanel}>UpdateUser</button>    
             {userpanel.usermanager && <Userall  handleEditUserButton={handleEditUserButton} systemusers={systemusers} addNewUser={openUserPanelFormAdd} openAccessForm={openAccessForm}/> }
             {userpanel.userform && <Userform userform={userform} handleUserFormChange={handleUserFormChange} cancel={openUserPanel} userformEdit={userpanel.userformEdit} handleUserFormSubmit={handleUserFormSubmit}/>}
             {userpanel.useraccess && <UserAccessform userAccessData={userAccessData} accessFormSearchAlbum={accessFormSearchAlbum}  userAccessSearchData={userAccessSearchData} accessFormAddNew={accessFormAddNew} handleRemoveAccess={handleRemoveAccess}/>}
             </div>}


         {panel.dashboard && <Dashboard/>}



        </div>
      </div>
     
    </div>
  </div>
    )
}

export default Adminmain
