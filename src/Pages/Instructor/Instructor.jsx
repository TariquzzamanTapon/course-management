import React, { useEffect, useState } from 'react';

const Instructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://school-hunt-tariquzzamantapon.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className="grid grid-cols-1 my-10 md:grid-cols-3 gap-3">
            {
                instructors?.map(instructor => <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="md:h-80" src={instructor?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{instructor?.name}</h2>
                        <p >{instructor?.email}</p>
                        <p >Number of Class Taken :  {instructor?.numberOfClassTakenByInstructor}</p>
                        <p>Class Taken By  {instructor.nameOfTheClassesTakenByTheInstructor?.map(i => <li>{i}</li>)}</p>
                        
                    </div>
                </div>)

              
            }
        </div >
    );
};

export default Instructor;