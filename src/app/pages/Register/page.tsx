'use client';
import React, { useState } from 'react';
import './Register.scss';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { useFormik } from 'formik';
import { FormRegisterSchema } from '@/app/schema/FormRegisterSchema';

const Register = () => {
  const [eye1, setEye1] = useState<boolean>(false);
  const [eye2, setEye2] = useState<boolean>(false);

  interface FormValues {
    Username: string;
    Age: string;
    Email: string;
    Password: string;
    confirmpassword: string;
  }

  const { values, handleChange, handleSubmit, errors, touched } = useFormik<FormValues>({
    initialValues: {
      Username: '',
      Age: '',
      Email: '',
      Password: '',
      confirmpassword: '',
    },
    validationSchema: FormRegisterSchema,
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
  });

  return (
    <main>
      <section>
        <div className='form-box'>
          <h2>REGISTER</h2>
          <form onSubmit={handleSubmit}>
            <div className='inp-box'>
              <label htmlFor='username'>Enter Username</label>
              <input
                type='text'
                id='Username'
                placeholder='Please enter your username'
                value={values.Username}
                onChange={handleChange}
              />              
            </div>
            {touched.Username && errors.Username && <div className='error-text-box'>{errors.Username}</div>}

            <div className='inp-box'>
              <label htmlFor='age'>Enter Age</label>
              <input
                type='text'
                id='Age'
                placeholder='Please enter your age'
                value={values.Age}
                onChange={handleChange}
              />              
            </div>
            {touched.Age && errors.Age && <div className='error-text-box'>{errors.Age}</div>}

            <div className='inp-box'>
              <label htmlFor='email'>Enter Email</label>
              <input
                type='text'
                id='Email'
                placeholder='Please enter your email'
                value={values.Email}
                onChange={handleChange}
              />             
            </div>
            {touched.Email && errors.Email && <div className='error-text-box'>{errors.Email}</div>}

            <div className='inp-box'>
              <label htmlFor='password'>Enter Password</label>
              <input
                type={eye1 ? 'text' : 'password'}
                id='Password'
                placeholder='Please enter your password'
                value={values.Password}
                onChange={handleChange}
              />
              <div onClick={() => setEye1(!eye1)} className='eye-box'>
                {eye1 ? <LuEye /> : <LuEyeClosed />}
              </div>   
            </div>
            {touched.Password && errors.Password && <div className='error-text-box'>{errors.Password}</div>}

            <div className='inp-box'>
              <label htmlFor='confirmpassword'>Enter Confirm password</label>
              <input
                type={eye2 ? 'text' : 'password'}
                id='confirmpassword'
                placeholder='Please enter your confirm password'
                value={values.confirmpassword}
                onChange={handleChange}
              />
              <div onClick={() => setEye2(!eye2)} className='eye-box'>
                {eye2 ? <LuEye /> : <LuEyeClosed />}
              </div>
            </div>
            {touched.confirmpassword && errors.confirmpassword && (
                <div className='error-text-box'>{errors.confirmpassword}</div>
              )}

            <button type='submit'>SIGN UP</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;
