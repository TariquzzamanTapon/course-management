import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProver';
import { Link } from 'react-router-dom';

const ClassesBox = ({ info }) => {
    const { user } = useContext(AuthContext);
    const { image, name, instructorName, availableSeats, price } = info;
    return (
        <div>

            {
                availableSeats == 0 ? <div className="card w-96 bg-red-600 text-white shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p><span className='font-semibold'>Instructor Name : </span> {instructorName}</p>
                        <p><span className='font-semibold'>Available Seats : </span> {availableSeats}</p>
                        <p><span className='font-semibold'>Price : </span> {price}</p>
                        <div className="card-actions justify-end">
                            {
                                user ? <button disabled={availableSeats == 0} className=' btn w-full bg-red-200 hover:bg-red-300'>Select Class</button> :
                                    <Link to='/login' className='btn w-full bg-red-200 hover:bg-red-300'>login to access class</Link>
                            }
                        </div>
                    </div>
                </div> :
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p><span className='font-semibold'>Instructor Name : </span> {instructorName}</p>
                            <p><span className='font-semibold'>Available Seats : </span> {availableSeats}</p>
                            <p><span className='font-semibold'>Price : </span> {price}</p>
                            <div className="card-actions justify-end">
                                {
                                    user ? <button disabled={availableSeats == 0} className=' btn w-full bg-red-200 hover:bg-red-300'>Select Class</button> :
                                        <Link to='/login' className='btn w-full bg-red-200 hover:bg-red-300'>login to access class</Link>
                                }
                            </div>
                        </div>
                    </div>

            }
        </div>
    );
};

export default ClassesBox;