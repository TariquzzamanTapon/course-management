import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ClassesBox from '../ClassesBox/ClassesBox';

const Classes = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('https://school-hunt.vercel.app/class')
            .then(res => res.json())
            .then(data => setInfo(data));
    }, [])
    return (
        <div className=' my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-10'>
            {
                info.map(i => <ClassesBox info={i}></ClassesBox>)
            }
        </div>
    );
};

export default Classes;