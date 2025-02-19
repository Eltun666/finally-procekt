'use client';

import React, { useState } from 'react';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { useFormik } from 'formik';
import { FormLoginSchema } from '@/app/schema/FormLoginSchema';
import "../Register/Register.scss";

const Login = () => {
  const [eye1, setEye1] = useState<boolean>(false);

  interface FormValues {
    Email: string;
    Password: string;
  }

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched
  } = useFormik<FormValues>({
    initialValues: {
      Email: '',
      Password: '',
    },
    validationSchema: FormLoginSchema,
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
  });

  return (
    <main>
      <section>
        <div className='form-box'>
          <h2>Log In</h2>
          <form onSubmit={handleSubmit}>
            
            {/* Email Input */}
            <div className='inp-box'>
              <label htmlFor="email">Enter Email</label>
              <input
                type="email"
                id='email'
                name='Email'
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Please enter your email'
              />             
            </div>
            {touched.Email && errors.Email && (
                <div className="error-text-box">{errors.Email}</div>
              )}

            {/* Password Input */}
            <div className='inp-box'>
              <label htmlFor="password">Enter Password</label>
              <input
                type={eye1 ? 'text' : 'password'}
                id='password'
                name='Password'
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Please enter your password'
              />
              <div onClick={() => setEye1(!eye1)} className='eye-box'>
                {eye1 ? (
                  <LuEye style={{ display: 'block' }} />
                ) : (
                  <LuEyeClosed style={{ display: 'block' }} />
                )}
              </div>             
            </div>
            {touched.Password && errors.Password && (
                <div className="error-text-box">{errors.Password}</div>
              )}

            <button type="submit">Log In</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
