import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProver';
import { useQuery } from '@tanstack/react-query';

const useClass = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: course = [], } = useQuery({
        queryKey: ['class', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/class`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.json();
        }
    })
    return [course, refetch]
};

export default useClass;