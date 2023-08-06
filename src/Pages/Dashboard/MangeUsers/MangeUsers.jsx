import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const MangeUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            return res.json();
        }
    })



    const handleAdmin = (user) => {
        console.log(user._id, 'admin');
        fetch(`http://localhost:5000/users/admin/${user?._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`${user?.name} is admin now`)
                refetch();
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    // const handleInstructor = (user) => {
    //     console.log( 'instructor')
    //     fetch(`http://localhost:5000/users/instructor/${user?._id}`, {
    //         method: "PATCH"
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             toast.success(`${user?.name} is instructor now`)
    //             refetch();
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //         })
    // }



    return (
        <div>
            <div className='text-2xl font-bold text-right mb-3'>
                All Users : {users?.length}
            </div>
            <div className="overflow-x-auto p-6">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        {/* {user?.role === 'admin' ? 'admin' : 'instructor'} */}
                                        {user?.role === "admin" ? "Admin" : (user?.role === "instructor" ? "Instructor" : <>
                                            <div className="dropdown dropdown-left">
                                                <label tabIndex={0} className="btn m-1 bg-red-200 hover:bg-red-300">Role</label>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                    <li><a onClick={() => handleAdmin(user)}>Make a Admin</a></li>
                                                    <li><a onClick={() => handleInstructor(user)}>Make a Instructor</a></li>
                                                </ul>
                                            </div>
                                        </>)}
                                    </td>

                                </tr>
                            </>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MangeUsers;