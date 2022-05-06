import {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import classes from '../components/Auth/AuthForm.module.css';
import { sendLoginInfo } from '../api/database.api';
import { ILoginProps, loginForm } from '../constants/profile.constants';


const LoginPage = () => {
  const history = useHistory();
  const [loginValues, setLoginValues] = useState<ILoginProps>(loginForm);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event: any) => {
    event.preventDefault();

    const url = 'https://test-1234567533.herokuapp.com/user/login';
    const fetch_body = JSON.stringify({
      username: loginValues.email,
      password: loginValues.password,
      returnSecureToken: true
    })
    setIsLoading(true);
    console.log("login success")
    sendLoginInfo(url, fetch_body, setIsLoading, history)

  };

  return (
    <NavBar>
      <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              onChange={(event) => {
                setLoginValues({ ...loginValues, email: event.target.value })
              }}
              type="text"
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



    </NavBar>
  )
}

export default LoginPage