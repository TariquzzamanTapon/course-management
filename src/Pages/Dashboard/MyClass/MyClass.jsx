import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProver';
import { useState } from 'react';

const MyClass = () => {

    const [iclass, setIclass] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/class/instructor?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIclass(data)
            })

    },[])

    return (
        <div >
            <div className='text-2xl font-bold text-right mb-3'>
                My Class : {iclass.length}
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Class Name</th>
                            <th>Available Seats</th>
                            <th>Enrolled Student</th>
                            <th>Number Of Students.</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            iclass?.map((cart, index) => <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <th>{cart?.instructorName}</th>
                                    <td>{cart?.name}</td>
                                    <td>{cart?.availableSeats}</td>
                                    <td>{cart?.totalEnrolledStudent}</td>
                                    <td>{cart?.numberOfStudent}</td>
                                    <td>{cart?.price}</td>
                                    <td>{cart?.status}</td>  
                                </tr>
                            </>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClass;

// Show all the Classes an instructor has added after clicking the Add button from the Add a Class page. Each Class will show relevant information, including pending/ approved/ denied status, Total Enrolled Students, Feedback & Update button.