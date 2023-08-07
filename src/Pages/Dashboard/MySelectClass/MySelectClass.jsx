import React from 'react';
import useCarts from '../../../componets/Firebase/Hooks/useCarts';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProver';



const MySelectClass = () => {

    const { user } = useContext(AuthContext)
    const [carts, refetch] = useCarts();
    console.log(carts);


    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }



    return (
        <div >
            <div className='text-2xl font-bold text-right mb-3'>
                Your Selected Class: {carts?.length}
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class Name</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Action </th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts?.map((cart, index) => <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{cart?.name}</td>
                                    <td>{cart?.availableSeats}</td>
                                    <td>$ {cart?.price}</td>
                                    <td><button onClick={() => handleDelete(cart?._id)}><AiFillDelete title='Delete' className='h-6 w-6 text-red-400 hover:text-red-500 transition'></AiFillDelete></button></td>
                                    <td> <Link to={`/dashboard/payment/${cart?._id}`}> <button>Pay</button> </Link> </td>
                                </tr>

                                {/* TODO PAYMENT  */}
                            </>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MySelectClass;