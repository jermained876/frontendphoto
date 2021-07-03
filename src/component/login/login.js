import React, {useEffect, useState, Component} from 'react'
import { useForm } from "react-hook-form";
import {useStateValue} from '../../StateProvider'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Login() {

    const [file, setfile] = useState('')
    const [access, setaccess] = useState({username:'', password:''})
    const {register, handleSubmit, errors} = useForm()
    const [{user}, dispatch] = useStateValue()
    let history = useHistory()

    useEffect(() => {
        console.log('test')
        return () => {
            
        }
    }, [])

    const handleformsubmit = (data) =>{

        console.log(data)

        axios.post('http://127.0.0.1:8000/api/token/',access)
            .then((res)=>{loaduser(res.data)
                dispatch({
                    type:'LOAD_TOKEN',
                    item:res.data
                })
            })
            .catch((error)=>console.log(error))
    }

    const loaduser = (data) =>{

        console.log(data)
        const token = data.access
        const refresh =data.refresh


        axios.get('http://127.0.0.1:8000/api/adminapi/currentuser',{
               headers:{
                'Authorization': `Bearer ${token}`
               }
           })
           .then((res)=>{
               console.log(res.data)

            dispatch({
                type:'LOAD_USER',
                item:res.data
            })

            if (res.data?.is_superuser)
            {
                dispatch({
                    type:'LOAD_ACCESS',
                    item:'admin'
                })
                history.push('/admin')    
                return 
            }
            if(res.data.groups?.[0])
            {
                dispatch({
                    type:'LOAD_ACCESS',
                    item:res.data.groups?.[0]?.name,
                })
                history.push('/mygallery')    
                return 
            }

           })
           .catch((error)=>console.log(error))


          
       
    }



    const handleChange = (Event) =>{
        const targetname = Event.target.name
        const value = Event.target.value
        if( targetname=='username')
                 setaccess({...access,username:value})
        else if (targetname=='password')
                 setaccess({...access,password:value})

    }

    return (


        <div>

            <div className='container'>
                {user?.username}
            <div     className='row'>

                <div className='offset-md-3 col-md-4 mt-5'>
                <form onSubmit={handleSubmit(handleformsubmit)}>
                  <div class="form-group">
                     <label>User Name</label>
                     <input  {...register("username")} type="text" class="form-control" placeholder="User Name" name='username' value={access.username} onChange={handleChange}/>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input {...register("password")}  type="password" class="form-control" placeholder="Password" name='password' value={access.password} onChange={handleChange}/>
                  </div>
                  <button type="submit" class="btm btm-black">Login</button>
                 
               </form>
                </div> 


            </div>


            </div>
            
        </div>
    )
}

export default Login

