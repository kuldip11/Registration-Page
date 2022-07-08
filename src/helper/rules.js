export const nameRules = [
    {
        required: true,
        message: 'name is requried'
    },
    {
        pattern: new RegExp(/^[a-zA-Z ]*$/),
        message: 'invalid name'
    }
]

export const emailRules = [
    {
        required: true,
        message: 'email is requried'
    },
    {
        pattern: new RegExp(/^([a-zA-Z0-9_\-\.]+)@(?<!hotmail|gmail|yahoo)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/),
        message: 'invalid email'
    }
]

export const numberRules = [
    {
        required: true,
        message: 'number is requried'
    }
]

export const genderRules = [
    {
        required: true,
        message: 'gender is requried'
    }
]

export const dobRules = [
    {
        required: true,
        message: 'DOB is requried'
    }
]

export const countryRules = [
    {
        required: true,
        message: 'country is requried'
    }
]

export const stateRules = [
    {
        required: true,
        message: 'state is requried'
    }
]

export const cityRules = [
    {
        required: true,
        message: 'city is requried'
    }
]

export const addressRules = [
    {
        required: true,
        message: 'address is requried'
    }
]

export const passwordRules = [
    {
        required: true,
        message: 'password is requried'
    },
    {
        pattern: new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
        message: 'password is not strong'
    }
]