import {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';

import classes from '../components/Auth/AuthForm.module.css';
import { ILoginProps, loginForm } from '../constants/profile.constants';

const LoginPage = () => {
  
    const [loginValues, setLoginValues] = useState<ILoginProps>(loginForm);
    const [isLoading, setIsLoading] = useState(false);

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
                        onChange={(event) => {
                            setLoginValues({ ...loginValues, email: event.target.value })
                        }}
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="What's your email?"
                        value={loginValues.email}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        onChange={(event) => {
                            setLoginValues({ ...loginValues, password: event.target.value })
                        }}
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="What's your password?"
                        value={loginValues.password}
                    />
                </div>
                <div className={classes.actions}>

                    {!isLoading && <button>Login</button>}
                    {isLoading && <p>Sending request...</p>}

                </div>
            </form>
        </section>
  )
}

export default LoginPage