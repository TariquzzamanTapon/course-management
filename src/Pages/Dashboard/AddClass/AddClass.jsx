import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProver';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AddClass = () => {
    const { user } = useContext(AuthContext);

    const handleClass = (e) => {
        // _id, image, name, instructorName, availableSeats, price
        e.preventDefault();
        const image = e.target.picture.value;
        const name = e.target.className.value;
        const instructorName = user?.displayName;
        const email = user?.email;
        const price = e.target.price.value;
        const availableSeats = e.target.seats.value;
        let status = 'pending'
        let totalEnrolledStudent = 0;
        let numberOfStudent  = 0;
        
        const myClass = {
            image, name, instructorName, email, price, availableSeats, status, totalEnrolledStudent
        }
        axios.post('https://school-hunt.vercel.app/class/instructor', myClass,{
            headers : {
                authorization : `Bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res=>{
            // console.log(res.data)
            toast.success('Class add successfully');
        })


        // console.log(myClass);

    }
    return (
        <div className='my-4 md:my-10'>

            <form onSubmit={handleClass}>
                <div className="flex py-2">
                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <input type="text" name='className' placeholder="Class Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full mx-2">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="text" name='picture' placeholder="Picture URL of the clss" className="input input-bordered w-full" />
                    </div>

                </div>

                <div className="flex py-2">
                    <div className="form-control w-full mx-2">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" placeholder="Instructor Name" className="input input-bordered w-full" name='instructor-name' defaultValue={user?.displayName}/>
                    </div>
                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>

                        </label>
                        <input type="text" placeholder="Seller Email" className="input input-bordered w-full" name='instructor-email' defaultValue={user?.email} />
                    </div>
                </div>

                <div className="flex py-2">
                    <div className="form-control w-full mx-2 ">
                        <label className="label">
                            <span className="label-text">Available seats</span>
                        </label>
                        <input type="number" name='seats' placeholder="Seats " className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control w-full mx-2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name='price' placeholder="Class price" className="input input-bordered w-full" />
                    </div>

                </div>
                <button className='btn btn-block my-2 bg-red-200 hover:bg-red-300'>Add</button>
            </form >

        </div >
    );
};

export default AddClass;