import React from 'react'
import './navb.css'
import {useHistory} from 'react-router-dom'
import {useStateValue} from '../../StateProvider'

function Navb() {

    const history = useHistory()
  const [{user}, dispatch] = useStateValue()
  const {username} = user

  const openLogin = () =>{
    console.log('test')
    history.push('/login')
  }

const logout = () =>{
    dispatch({
        type:'LOGOUT',
        item:'',
    })
}

    return (
        <div>

            <div class="nav">
                
            <input type="checkbox" id="nav-check"/>
            <div class="nav-header">
                <div class="nav-title" onClick={()=>history.push('/')}>
                Company
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
            
            <div class="nav-links ">
                
                <a className='active' onClick={()=>history.push('/portfolio')} >Portfolio</a>
                {user.username &&  <a onClick={()=>history.push('/mygallery')}>My Gallery</a>}
                <a onClick={()=>history.push('/booking')}>Book</a>
                {user.is_superuser &&  <a onClick={()=>history.push('/admin')}>Admin-Panel</a>}
                
                <div className='login-bar'>
                {user.username && <a className='username'>{user.username}</a> }
                    
                    {user.username ? <div className='btn-login' onClick={logout}>logout</div>: <div className='btn-login' onClick={()=>history.push('/login')}>login</div>}
                    </div>
                
            </div>

          

            
            </div>
        


        </div>
    )
}

export default Navb
