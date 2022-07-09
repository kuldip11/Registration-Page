import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import { Checkbox, Form, Input} from 'antd';
import ReCAPTCHA from "react-google-recaptcha";
import { 
    addressRules,
    cityRules,
    countryRules,
    dobRules,
    emailRules,
    genderRules,
    nameRules,
    numberRules,
    passwordRules,
    stateRules } from '../../helper/rules';
import { userSignUp } from '../../services/signup';

const SignUp = ({setPage}) => {
    const [location, setLocation] = useState([])
    const [country, setCountry] = useState('')
    const [countryList, setCountryList] = useState([])
    const [city, setCity] = useState([])
    //dummy state data
    const [states, setStates] = useState(['abc, abdk','bddg cwc','cyfwe dhbc','juybhx xhg'])
    const [form] = Form.useForm();
    const recaptchaRef = React.useRef();
    const {Item} = Form
    const grecaptchaObject = window.grecaptcha
    const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
    };
    const handleFormSubmit = async () => {
        setPage('thankyou')
        // form.validateFields()
            // .then(async(values) => {
            //     try{
            //         const userSignUP = await userSignUp(values)
            //         setPage('thankyou')
            //     }
            //     catch(error){
            //         console.log(error)
            //     }

            // })
            // // .then(() => {form.resetFields()})

            // .catch((info) => {
            //     console.log('validation failed', info);
            // });
    };


    const pageChangeHandler = () => {
    setPage('login')
    }

    useEffect(()=>{
        fetch('https://countriesnow.space/api/v0.1/countries/population/cities')
        .then((response)=> {return response.json()})
        .then((response)=> {
            setLocation(response?.data)
        })
        .catch(err => {console.log('something went wrong')})

    },[])

    useEffect(()=>{
        let local = '';
        const countries = location?.map((_item)=>{
            if(local !== _item?.country){
                local = _item?.country
                return _item?.country
            }
            return
        })
        const filteredCounties = countries?.filter((_item) =>
            _item !== undefined
        )
        setCountryList(filteredCounties)
    },[location])

    useEffect(()=> {
        const cities = location?.filter((_item)=> _item?.country===country)
        const filterCities = cities?.map((_city) => {return _city?.city})
        setCity(filterCities)
    },[country])

    return (
    <div className='sign-up'>
        <h4>Already have a account?<span className='switchPage' onClick={pageChangeHandler}> Login</span></h4>
        <h2>Register</h2>
        <Form
            className='signup-form'
            layout="vertical"
            form={form}
            name="control-hooks"
            // onFinish={handleFormSubmit}
            scrollToFirstError
        >
            <div className='signup-row'>
                <Item
                    name="name"
                    rules={nameRules}
                >
                    <Input placeholder='Full Name'/>
                </Item>

                <Item
                    name="email"
                    rules={emailRules}
                >
                    <Input placeholder='Email' />
                </Item>
            </div>
            <div className='signup-row'>
                <Item
                    name="phone"
                    rules={numberRules}
                >
                    <Input placeholder='Number' type='number'/>
                </Item>

                <Item
                    name="gender" 
                    rules={genderRules} 
                >
                    <Input placeholder='Gender' />
                </Item>
            </div>
            <div className='signup-row'>
                <Item
                    name="dob"
                    rules={dobRules} 

                >
                    <Input placeholder='DOB' type='date'/>
                </Item>
                <Item
                    name="country"
                    rules={countryRules} 
                >
                    <select className='pick' onChange={(e)=>{setCountry(e?.target?.value)}}>
                        <option value="" disabled selected>Country</option>
                        {countryList?.map((_country) => <option >{_country}</option>)}
                    </select>
                </Item>
            </div>
            <div className='signup-row'>
            <Item
                    name="state"
                    rules={stateRules} 
                >
                    <select className='pick'>
                        <option  disabled selected>State</option>
                        {states?.map((_state) => <option >{_state}</option>)}
                    </select>
                </Item>
                <Item
                    name="city"
                    rules={cityRules} 
                >
                    <select className='pick'>
                        <option value="" disabled selected>Select City</option>
                        {city?.map((_city)=> <option value={_city}>{_city}</option>)}
                    </select>
                </Item>
            </div>
            <div className='signup-row' >
                <Item
                    className='address'
                    name="address"
                    rules={addressRules}
                >
                    <Input  placeholder='Residency Address' />
                </Item>
            </div>
            <div className='signup-row'>
                <Item
                    className='password'
                    name="password"
                    hasFeedback
                    rules={passwordRules}
                >
                    <Input.Password placeholder='Password'/>
                </Item>

                <Item
                    name="confirm"
                    className='password'
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                    ]}

                >
                    <Input.Password placeholder='Confirm Password' />
                </Item>
            </div>
            <div>
                <Item
                    name="agreement"
                    valuePropName="checked"
                    style={{marginLeft:'0px'}}
                    className='check'
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                    I agree to the <a href="">term &#38; condition</a>
                    </Checkbox>
                </Item>
                <Item
                    name="policy"
                    valuePropName="checked"
                    style={{marginLeft:'0px'}}
                    className='check'
                    rules={[
                    {
                        validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should read privacy policy')),
                    },
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>
                    I saw <a href="">privacy policycondition</a>
                    </Checkbox>
                </Item>
            </div>
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="Your client site key"
                size='normal'
                grecaptcha={grecaptchaObject}
                style={{width:'200px'}}
            />
            <button 
                onClick={handleFormSubmit}
                className='submit-btn'
            >Sign Up</button>
        </Form>
    </div>
    )
}

export default SignUp