import React from 'react'
import axios from 'axios'
import {useStateValue} from '../../StateProvider'

export const Albumaccess= (data) =>{
    const dick ='this is shit'
    let albumaccesstype = ''
    const [{access}, dispatch] = useStateValue()
    axios.get(`http://127.0.0.1:8000/api/album/${data}`)
    .then((res)=>{
        console.log(res.data)
        albumaccesstype =res.data.access.name
        console.log(albumaccesstype)
        
        
    })
    .catch ((error)=>console.log(error))

    console.log(access)
    console.log(albumaccesstype)

    return (dick)
}
