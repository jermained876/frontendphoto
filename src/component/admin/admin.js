import React from 'react'
import { useForm } from "react-hook-form";
import {useStateValue} from '../../StateProvider'


function Admin() {
    const [{user, token, access}, dispatch] = useStateValue()
    return (
        <div>
            <div>Admin</div>
            <div>{user?.username}</div>
            <div>{token?.access}</div>
            <div>{access}</div>
        </div>
    )
}

export default Admin
