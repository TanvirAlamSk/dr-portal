import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { emailpasssignup } = useContext(AuthContext)
    const handelSignup = (data) => {
        console.log(data)


    }
    return (
        <div className='flex flex-col shadow-lg md:w-96 p-8 mx-auto rounded-xl my-4'>
            <h3 className='text-center text-xl mb-6'>Sign Up</h3>
            <form onSubmit={handleSubmit(handelSignup)}>
                <label>Name</label>
                <input type="text" {...register("name", { required: "Name is required" })} className="input input-bordered w-full " />
                {
                    errors.name && <p className='text-red-400 text-xs'>{errors.name.message}</p>
                }

                <div className='my-4'>
                    <label>Email</label>
                    <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full" />
                    {
                        errors.email && <p className='text-red-400 text-xs'>{errors.email.message}</p>
                    }
                </div>

                <label>Password</label>
                <input type='password' {...register("password", { minLength: { value: 8, message: "Password must be 8 Character or more" } })} className='input input-bordered w-full p-2 rounded-md'></input>
                {
                    errors.password && <p className='text-red-400 text-xs'>{errors.password.message}</p>
                }

                <input value="Login " type='submit' className='btn btn-neutral w-full p-2 rounded-md mt-6 text-lg font-light'></input>

            </form>
            <p className='text-sm text-center mt-3 mb-5'>Already have an account <span className='text-secondary'><Link to="/doctorsportal/login"> Go for Login</Link></span></p>
            <div className="divider divider-neutral">OR</div>
            <input value="CONTINUE WITH GOOGLE " type='submit' className='btn w-full p-2 rounded-md mt-3 text-md font-normal'></input>
        </div>
    );
};

export default Signup;