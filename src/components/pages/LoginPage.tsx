import React from 'react';
import classes from '../components/Auth/AuthForm.module.css';

const LoginPage = () => {
  
    const submitHandler = (event: any) => {
        event.preventDefault();
    };
  
    return (
        <section className={classes.auth}>
            <h1>LoginPage</h1>

            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input
                        onChange={() => {

                        }}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="What's your email?"
                        // value={}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        onChange={() => {

                        }}
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="What's your password?"
                        // value={}
                    />
                </div>
            </form>
        </section>
  )
}

export default LoginPage