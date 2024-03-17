import React from 'react';

const Login = () => {
    const handelLogin = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name, email)
        // event.target.reset()

    }
    return (
        <div className='flex flex-col'>
            <form onSubmit={handelLogin}>
                <input name='name' placeholder='name' className='w-full p-2 rounded-md bg-slate-200'></input>
                <br></br>
                <input name='email' placeholder='email' className='w-full p-2 rounded-md bg-slate-200 my-8'></input>
                <br></br>
                <input value="Submit" type='submit' className='btn btn-neutral w-full p-2 rounded-md'></input>
            </form>
        </div>
    );
};

export default Login;