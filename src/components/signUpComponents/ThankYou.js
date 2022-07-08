import { SmileOutlined } from '@ant-design/icons'
import React from 'react'

const ThankYou = ({setPage}) => {

    const pageHandler = () =>{
        setPage('login')
    }

    return (
        <div className='thankYouPage'>
            <div className='thank'>
                <div> Thank </div>
            </div>
            <div className='you'>
                <div> You </div>
            </div>
            <div className='happiness'>
                <SmileOutlined style={{fontSize:'80px', color: "#fa9562"}}/>
            </div>
            <div>
                <hr/>
            </div>
            <button 
                onClick={pageHandler}
                className='submit-btn'
            >Login Now</button>
        </div>
  )
}

export default ThankYou