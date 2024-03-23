import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form"
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserMail, setCreateUserMail] = useState("")
    const [token] = useToken(createUserMail);
    const { emailpasswordlogin, loginWithGoogle } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true });
    }
    const handelLogin = (data) => {
        emailpasswordlogin(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                setCreateUserMail(data.email);

            })
            .catch((error) => alert(error))
    }
    const handelGoogleLogin = () => {
        loginWithGoogle()
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => alert(error))
    }
    return (
        <div className='lg:h-screen7'>
            <div className='flex flex-col shadow-lg md:w-96 p-8 mx-auto rounded-xl '>
                <h3 className='text-center text-xl mb-10'>Login</h3>
                <form onSubmit={handleSubmit(handelLogin)}>
                    <label>Email</label>
                    <input type="text" {...register("email", { required: "Email address is require" })} className="input input-bordered w-full" />
                    {
                        errors.email && <p role='alert' className='text-red-400'>{errors.email.message}</p>
                    }

                    <div className='mt-4'></div>
                    <label>Password</label>
                    <input type='password' {...register("password", { minLength: { value: 8, message: "Password must be 8 Character or more" } })} className='input input-bordered w-full p-2 rounded-md'></input>
                    {
                        errors.password && <p className='text-red-400 text-xs'>{errors.password.message}</p>
                    }

                    <p className='text-xs mt-1'>Forgot Password ?</p>
                    <input value="Login " type='submit' className='btn btn-neutral w-full p-2 rounded-md mt-6 text-lg font-light'></input>

                </form>
                <p className='text-sm text-center mt-3 mb-5'>New to Doctors Portal? <span className='text-secondary'><Link to="/doctorsportal/signup">Create new account</Link></span></p>
                <div className="divider divider-neutral">OR</div>
                <input value="CONTINUE WITH GOOGLE" type='submit' onClick={handelGoogleLogin} className='btn  w-full p-2 rounded-md mt-3 text-md font-normal'></input>
            </div>
        </div>
    );
};

export default Login;