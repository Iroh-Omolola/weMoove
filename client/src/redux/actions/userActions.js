import axios from "axios";
import {message} from 'antd'

export const userLogin=()=>async dispatch=>{
    
    const reqObj={
        username:'hero1',
        password:'123456'
    }
    dispatch({type: 'LOADING' , payload:true})




    try {
        const response = await axios.post('https://wemoove.onrender.com/api/users/login' , reqObj)
        localStorage.setItem('user' , JSON.stringify(response.data))
        message.success('Login success')
        dispatch({type: 'LOADING' , payload:false})
        setTimeout(() => {
            window.location.href='/cars'
         
        }, 500);
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('https://wemoove.onrender.com/api/users/register', reqObj)
        message.success('Registration successful')
        setTimeout(() => {
            window.location.href='/login'
         
        }, 500);
       
        dispatch({type: 'LOADING' , payload:false})
        
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}