import React, { useEffect, useState } from 'react';

const PopularClass = () => {
    const [populars, setPopulars] = useState([])
    useEffect(() => {
        fetch("https://school-hunt-tariquzzamantapon.vercel.app/popular")
            .then(res => res.json())
            .then(data => setPopulars(data));
    }, [])
    return (
        <div className='my-10'>
            <h2 className='md:text-4xl text-2xl font-bold text-center my-3'>POPULAR CLASS SECTION</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                {
                    populars.map(popular => <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className="h-80" src={popular?.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title ">{popular?.course_name}</h2>
                            <p className=''><span className='font-bold'>Instructor Name : </span>{popular?.instructor_name}</p>
                            <p><span className='font-bold'>Available Seats :</span> {popular?.available_seats}</p>
                            <p><span className='font-bold'>Enrolled Students :</span> {popular?.enroled_student}</p>
                            <p> <span className='font-bold'>Price : </span> {popular?.price}</p>
                            
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default PopularClass;