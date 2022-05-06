import React from 'react'

const LoginPage = () => {
  
    const submitHandler = (event: any) => {
        event.preventDefault();
    };
  
    return (
        <section>
            <h1>LoginPage</h1>

            <form onSubmit={submitHandler}>
                <div>
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
                <div>
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