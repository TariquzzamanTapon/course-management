import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../AuthProvider/AuthProver';
import { saveUser } from '../../componets/Firebase/Hooks/auth';

const Login = () => {
    const { logIn, googleSignIn } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                saveUser(result.user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                // console.log(error);
            })
    }




    const onSubmit = data => {
        logIn(data.email, data.password)
            .then(reslut => {
                const loggeduser = reslut.user;
                // console.log(loggeduser)
                Swal.fire({
                    title: 'Login Successfull',

                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                Swal.fire({
                    title: `${error.message}`,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })
        // console.log(data);

    }


    const showHide = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div>
            <Helmet>
                <title>Sports Academy | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-white" >
                <div className="hero-content flex-col lg:flex-row">

                    <form onSubmit={handleSubmit(onSubmit)} className="card  w-1/2 max-w-sm  ">

                        <h1 className="text-3xl text-center mb-4 font-bold my-3">Login  now!</h1>
                        <div>
                            <button onClick={handleGoogle} className='w-full btn btn-accent text-white'>Connect With Google <FaGoogle></FaGoogle></button>
                            <div className='divider'></div>

                            <label className="label text-right">
                                <p className='text-right'>Are you New ? <Link className='underline text-success font-bold' to='/register'>Register</Link></p>
                            </label>
                        </div>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    <button onClick={showHide}>
                                        {showPassword ? "Hide" : "Show"}
                                    </button>
                                </label>
                                <input type={showPassword ? "text" : "password"} {...register("password", { required: true, minLength: 6, pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/ })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must be one uppercase,one special  character</p>}

                            </div>


                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>

                        </div>


                    </form>
                    <div className="text-center w-1/2 lg:text-left">
                        <img src='https://img.freepik.com/free-vector/key-concept-illustration_114360-6305.jpg?w=740&t=st=1686941206~exp=1686941806~hmac=c9086d429cfdd1a979fada565f3d3cba3bc2bb6777dd058e27c0853a4b44e9c1' alt="" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;