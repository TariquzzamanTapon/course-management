import React from 'react';
import useClass from '../../../componets/Firebase/Hooks/useClass/useClass';
import { toast } from 'react-hot-toast';

const ManageClass = () => {
    const [course, refetch] = useClass();

    const handleApproved = (item) => {
        // console.log(item._id, 'approved')
        fetch(`https://school-hunt.vercel.app/class/instructor/approved/${item?._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Class is approved`)
                refetch();
            })
            .catch(error => {
                // console.log(error.message)
            })
    }

    const handleDenied = (item) => {
        // console.log(item._id, 'deneid')
        fetch(`https://school-hunt.vercel.app/class/instructor/denied/${item?._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Class is approved`)
                refetch();
            })
            .catch(error => {
                // console.log(error.message)
            })
    }
    return (
        <div>
            <div className='text-2xl font-bold text-right mb-3'>
                All Users : {course?.length}
            </div>
            <div className="overflow-x-auto p-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class Image</th>
                            <th>Class name</th>
                            <th>Instructor name</th>
                            <th>Instructor email </th>
                            <th>Available seats </th>
                            <th>Price </th>
                            <th>Status </th>
                        </tr>
                    </thead>
                    {/* pending/approved/denied */}
                    <tbody>
                        {
                            course?.map((c, index) => <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td><img className='h-10' src={c?.image} alt="" /></td>
                                    <td>{c?.name}</td>
                                    <td>{c?.instructorName}</td>
                                    <td>{c?.email}</td>
                                    <td>{c?.availableSeats}</td>
                                    <td>{c?.price}</td>
                                    <td>{ c?.status === "approved" ? "approved" : (c?.status === "denied" ? "denied" : <>
                                        <div className="dropdown dropdown-left">
                                            <label tabIndex={0} className="btn m-1 bg-red-200 hover:bg-red-300">{
                                                c?.status
                                            }</label>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li><a onClick={() => handleApproved(c)}>Approved</a></li>
                                                <li><a onClick={() => handleDenied(c)}>Denied</a></li>
                                            </ul>
                                        </div>
                                    </>)}</td>
                                </tr>
                            </>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClass;


// Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).