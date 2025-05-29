// import { useActionState} from 'react';
import styles from "./Login.module.css"
import { fakeLogin } from '../../api';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";

function Login() {
 const navigate = useNavigate();
 const [noVisible,setNoVisible]= useState(false)
 const passState = ()=>{
  setNoVisible(!noVisible)
 }
  const {register,handleSubmit , formState:{errors}} = useForm()
  const onSubmit = async (data)=>{
try {
  const response = await fakeLogin (data)
setTimeout(() => {
  navigate('/');
  return console.log(response) 
}, 1000);

}
  catch (e) {
  throw new Error(e.message);
}

  


  }
    
   
    return ( 
        <div className={styles.container}> 
        <h1 className={styles.heading}>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>Username:</label>
            <input
              type="text"
              id="username"
             name='userName'
             autoComplete="username"
              className={`${errors.userName ? styles.inputError:styles.input}`}
              {...register('userName',{required:true})}
            />
           
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>Password:</label>
            <div className={styles.input_wrapper}>
            <input
              type={noVisible? 'text':'password'}
              id="password"
              name='password'
             autoComplete="current-password"
              className={`${errors.password ? styles.inputError:styles.input}`}
               {...register('password',{required:true})}
             
            / >
             {noVisible ?  <IoEyeSharp  onClick={()=>passState()} className={styles.inputIcon }/>:<IoEyeOffOutline onClick={()=>passState()} className={styles.inputIcon }/>}
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name='email'
           autoComplete="email"
              className={`${errors.email ? styles.inputError:styles.input}`}
               {...register('email',{required:true})}
            />
            
          </div>
          <div className={styles.button_container}>
            
          <button type="submit" className={styles.button} >{'Submit'}</button>
          
   
         
          </div>
      
        </form>
      </div>
     );
}

export default Login;