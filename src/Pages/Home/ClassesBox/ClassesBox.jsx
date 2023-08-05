import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProver';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ClassesBox = ({ info }) => {
    const { user } = useContext(AuthContext);
    const { _id, image, name, instructorName, availableSeats, price } = info;

    const handleBooking = (id) => {
        console.log('you just hit me', id);
        const cartItem = {
            cartId : _id,
            image,name, instructorName, availableSeats,price
        }
        console.log(cartItem);
        if(user && user?.email){
            axios.post('http://localhost:5000/carts',cartItem)
            .then(data=> {
                if(data.data.insertedId){
                    toast.success("Successfully data added")
                }
            })
            .catch(error=> toast.error(error.message))
        }
    }
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
                        <figure><img className='hover:scale-105 transition' src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p><span className='font-semibold'> Instructor Name : </span> {instructorName}</p>
                            <p><span className='font-semibold'>Available Seats : </span> {availableSeats}</p>
                            <p> <span className='font-semibold'> Price : </span> {price}</p>
                            <div className="card-actions justify-end">
                                {
                                    user ? <button onClick={() => handleBooking(_id)} disabled={availableSeats == 0} className=' btn w-full bg-red-200 hover:bg-red-300'>Select Class</button> :
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