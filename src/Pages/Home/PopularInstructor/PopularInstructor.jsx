import React, { useState } from 'react';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);

    fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => setInstructors(data))

    return (
        <div className='my-10'>
            <h2 className='md:text-4xl text-2xl font-bold text-center my-3'>POPULAR INSTRUCTORS SECTION</h2>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    instructors.map(instructor => <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className="w-2/5" src={instructor?.image} alt="Movie" /></figure>

                        <div className="card-body">
                            <h2 className="card-title">{instructor?.name}</h2>
                            <p>{instructor?.email}</p>
                            <p><span className='font-bold'>Class Taken :</span> {instructor?.numberOfClassTakenByInstructor}</p>
                            <div>
                                <p className='font-bold'>Class Taken Name -</p>
                                {
                                    instructor?.nameOfTheClassesTakenByTheInstructor.map(p=> <li className='mx-4'>{p}</li> )
                                }
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;