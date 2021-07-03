import React, { Component } from 'react';

class Userall extends Component {
    state = {  }
    render() { 

        const {systemusers, addNewUser,handleEditUserButton, openAccessForm} = this.props

        return ( <div>


<button className='btn btn-navy' onClick={addNewUser}>Add new user</button>

<table class="table">
  <thead>
    <tr className="">
      <th scope="col">Username</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Groups</th>
      <th className='text-center' scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {systemusers.map(user=> <tr key={user.id} class="table-light">

        
<th scope="row">{user.username}</th>
<td>{user.first_name}</td>
<td>{user.last_name}</td>
<td>{user.email}</td>
<td>{user.groups.map(group=><span> {group.name} </span>)} <span>{user.is_superuser? 'Admin': ''}</span></td>
<td>
<button className='btn btn-sm btn-outline-primary' onClick={()=>handleEditUserButton(user)}>Edit</button>
<button className='btn btn-sm btn-outline-danger'>Delete</button>
{user.is_superuser? '' :<button className='btn btn-sm btn-outline-warning' onClick={()=>openAccessForm(user)}>Access</button>}

</td>


</tr> )}
    
   
   
  </tbody>
</table>

        </div> );
    }
}
 
export default Userall;