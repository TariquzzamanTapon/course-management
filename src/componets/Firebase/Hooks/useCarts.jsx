import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProver';
import { useQuery } from '@tanstack/react-query';

const useCarts = () => {
    const { user } = useContext(AuthContext);

    const {data : carts = [], isLoading, refetch} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        }
    })
    return [carts, isLoading, refetch]
};

export default useCarts;