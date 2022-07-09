import React from 'react'
import {Form, Input} from 'antd';
import { 
    emailRules,
    passwordRules} from '../../helper/rules';
import { userLogIn } from '../../services/login';

const LogIn = ({setPage}) => {
    const userId = JSON.parse(localStorage.getItem('userId'));
    const [form] = Form.useForm();
    const {Item} = Form;

    const pageChangeHandler = () => {
        setPage('signup')
    }

    const handleFormSubmit = async (e) => {
        e.stopPropagation()
        // form.validateFields()
        //     .then(async(values) => {
        //         try{
        //             console.log(values)
        //             // const loggedIn = await userLogIn(values)
        //             setPage('userprofile')
        //         }
        //         catch(error){
        //             console.log(error)
        //         }
        //     })
        //     .catch((info) => {
        //         console.log('validation failed', info);
        //     });
        setPage('userprofile')
    };

    return (
        <div className='log-in'>
            <h2>Welcome Back</h2>
            <Form
                className='login-form'
                form={form}
                name="login-page"
            >
                <div className='logIn-column'>
                    <Item
                        className='email'
                        name="email"
                        rules={emailRules}
                    >
                        <Input placeholder='Email'/>
                    </Item>

                    <Item
                        name="password"
                        className="login-password"
                        hasFeedback
                        rules={passwordRules}
                    >
                        <Input.Password placeholder='Password' />
                    </Item>
                    <button className='submit-btn' onClick={handleFormSubmit}>Sign In</button>
                </div>
            </Form>
            <h4>Don't have an account? 
                <spam 
                    className='switchPage'
                    onClick={pageChangeHandler}
                > Signup</spam>
            </h4>
        </div>
  )
}

export default LogIn