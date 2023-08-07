import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProver';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useInstructor = () => {
    const { user } = useContext(AuthContext);

    const { data: isInstructor, refetch, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor'],
        queryFn: async () => {
            const res = await axios.get(`https://school-hunt.vercel.app/users/instructor/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            // console.log('from instructor', res.data.instructor)
            return res.data.instructor;
        }
    })

    return [isInstructor, refetch, isInstructorLoading]

};

export default useInstructor;