import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <img className='w-2/5 mx-auto' src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1686937290~exp=1686937890~hmac=367567af8d6ac770993aa76a8d79149563ed5a106af5a538d8c44c6c12a92b5f" alt="" srcset="" />

            <div className='w-full text-center'>
                <Link to="/"><button className='btn btn-primary'>BACK TO HOME</button></Link>
            </div>
        </div>
    );
};

export default Error;