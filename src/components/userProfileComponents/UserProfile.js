import { LogoutOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import {message} from 'antd'
const UserProfile = ({setPage}) => {
    const [user, setUser] = useState({})
    const logOutHandler = () => {
        localStorage.removeItem('userId')
        setPage('login')
    }
    const userId =  JSON.parse(localStorage.getItem('userId'));
    
    // useEffect(()=> {
    //     if(!userId){
    //         setPage('login')
    //     }
    // },[])

    useEffect(()=> {
        if(userId){
            fetch(`https://wordpress.betadelivery.com/interview/api/user/${userId}`)
            .then((response) => {
                if(response.status === 200)
                    return response.json()
            })
            .then((response) => {setUser(response)})
            .catch((error) => {
                message.warnning(error?.error)
            })
        }
    },[])

    return (
        <div className='user-profile'>
            <div className='header'>
                <h1>Welcome {user?.name}!</h1>
                <h3>Logout <LogoutOutlined color='red'onClick={logOutHandler}/></h3>
            </div>
            <h3>Your details</h3>
            <div className='user-info'>
                <div className='tabel-col-1'>
                    <div className='tab-col-1-1'>
                        <h3>Email:</h3>
                        <h4>{user?.email}</h4>
                    </div>
                    <div className='tab-col-1-1'>
                        <h3>Phone Number</h3>
                        <h4>{user?.number}</h4>
                    </div>
                    <div className='tab-col-1-1'>
                        <h3>Age</h3>
                        <h4>{user?.age}</h4>
                    </div>
                    <div ></div>
                </div>
                <div className='tabel-col-2'>
                <div className='tab-col-2-2'>
                        <h3>Gender:</h3>
                        <h4>{user?.gender}</h4>
                    </div>
                    <div className='tab-col-2-2'>
                        <h3>State</h3>
                        <h4>{user?.state}</h4>
                    </div>
                    <div className='tab-col-2-2'>
                        <h3>Country</h3>
                        <h4>{user?.country}</h4>
                    </div>
                    <div className='tab-col-2-2 tab-col2'>
                        <h3>City</h3>
                        <h4>{user?.city}</h4>
                    </div>
                </div>
                <div className='tabel-col-3'>
                    <h3>Location</h3>
                    <h4>{user?.location}</h4>
                </div>
            </div>
        </div>
    )
}

export default UserProfile