import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProver";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAdmin = () => {
    const { user } = useContext(AuthContext);

    const { data: isAdmin, isLoading, refetch } = useQuery({
        queryKey: ['admin', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://school-hunt.vercel.app/users/admin/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            console.log('use admin', res)
            return res.data.admin
        }
    })

    return [isAdmin,refetch]
};

export default useAdmin;