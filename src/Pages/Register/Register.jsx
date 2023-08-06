
import { Helmet } from 'react-helmet-async';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProver';
import { saveUser } from '../../componets/Firebase/Hooks/auth';
import { toast } from 'react-hot-toast';


const Register = () => {
    const { createUser, profileUpdate, googleSignIn } = useContext(AuthContext);

    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                saveUser(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                profileUpdate(data.name, data.photo)
                    .then(() => {
                        toast.success('Signup successful')
                        saveUser(result.user)
                        navigate(from, { replace: true })
                        reset();
                    })
                    .catch(error => {
                        toast.success(error.message)
                    })
            })
            .catch(error => {
                Swal.fire({
                    title: `${error.message}`,
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

        if (data.password !== data.confirmPassword) {
            Swal.fire({
                title: "Password does not match",
                text: "Please make sure the passwords match.",
                icon: "error",
                confirmButtonText: "OK"
            });
            return;
        }
    }


    // const onSubmit = data => {
    //     console.log(data)

    //     if (data.password !== data.confirmPassword) {
    //         Swal.fire({
    //             title: "Password does not match",
    //             text: "Please make sure the passwords match.",
    //             icon: "error",
    //             confirmButtonText: "OK"
    //         });
    //         return;
    //     }
    // }
    return (
        <div>
            <Helmet>
                <title>Sports Academy | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-white" >
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <img src='https://img.freepik.com/free-vector/placeholder-concept-illustration_114360-4847.jpg?w=740&t=st=1686938974~exp=1686939574~hmac=67d02ee31cf47ab22b48332d269f2a955ae53558eb2f19c0da57d2d36d46265d' alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card  w-1/2 max-w-sm  bg-base-100">
                        <h1 className="text-3xl text-center mt-2 font-bold">Register Now!</h1>
                        <div className="card-body">
                            <div>
                                <button onClick={handleGoogle} className='w-full btn btn-accent text-white'>Connect With Google <FaGoogle></FaGoogle></button>
                                <div className='divider'></div>
                                <label className="label">
                                    <p className='text-right'>Already Have Account ? <Link className='underline text-success font-bold' to='/login'>Login</Link></p>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Photo Url" className="input input-bordered" />
                                {errors.photo && <span className='text-red-600'>Photo is required</span>}
                            </div>
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
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/ })} name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 character</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600'>Password must be one uppercase,one special  character</p>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("confirmPassword", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/
                                    })}
                                    name="confirmPassword"
                                    placeholder="confirm password"
                                    className="input input-bordered"
                                />
                                {errors.confirmPassword?.type === "required" && (
                                    <p className="text-red-600">Confirm Password is required</p>
                                )}
                                {errors.confirmPassword?.type === "minLength" && (
                                    <p className="text-red-600">Confirm Password must be 6 characters</p>
                                )}
                                {errors.confirmPassword?.type === "pattern" && (
                                    <p className="text-red-600">
                                        Confirm Password must have one uppercase letter and one special character
                                    </p>
                                )}
                                {errors.confirmPassword?.type === "validate" && (
                                    <p className="text-red-600">Passwords do not match</p>
                                )}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>



                        </div>


                    </form>


                </div>
            </div>
        </div>
    );
};

export default Register;