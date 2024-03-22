'use client';
import React from 'react';
import classes from './login.module.css'
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {


  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is Invalid'),
    password: Yup.string().required('Password is required')
  });

  // initialize formik
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
      // send data to backend
    },
    validationSchema: loginValidationSchema
  })


  return (
    <div className=' bg-primary-subtle d-flex align-items-center'>
      <section className="container">
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="my-5 display-3 fw-bold ls-tight">
                  Welcome
                  <span className="text-primary"> Back</span>
                </h1>
                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
                  itaque accusantium odio, soluta, corrupti aliquam quibusdam
                  tempora at cupiditate quis eum maiores libero veritatis? Dicta
                  facilis sint aliquid ipsum atque?
                </p>
              </div>
              <div className="col-lg-5 col-md-6 mb-5 mb-lg-0 mx-auto">
                <div className="card shadow">
                  <div className="card-body py-5 px-md-5">
                    <h4 className='text-center fw-bold text-primary my-4'>Login To Continue</h4>
                    <form onSubmit={loginForm.handleSubmit}>
                      {/* 2 column grid layout with text inputs for the first and last names */}
                      <div class="mb-3">
                        <label for="" class="form-label">Email Address</label>
                        <input
                          type="text"
                          id="email"
                          onChange={loginForm.handleChange}
                          value={loginForm.values.email}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          loginForm.touched.email && 
                          <small className="text-danger">{loginForm.errors.email}</small>
                        }
                      </div>
                      <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input
                          type="password"
                          id="password"
                          onChange={loginForm.handleChange}
                          value={loginForm.values.password}
                          className="form-control"
                          placeholder=""
                        />
                        {
                          loginForm.touched.password && 
                          <small className="text-danger">{loginForm.errors.password}</small>
                        }
                      </div>

                      <div className="form-check mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example33"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example33"
                        >
                          Remember Me
                        </label>
                      </div>
                      {/* Submit button */}
                      <button
                        type="submit"
                        className="btn btn-primary w-100 mb-4"
                      >
                        Login Now
                      </button>
                      <div className="text-center">
                        <p>Not Registered Yet</p>
                        <Link href='/signup'>Register Here</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </div>

  )
}

export default Login;