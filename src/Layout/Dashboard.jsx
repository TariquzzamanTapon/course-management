import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProver';
import { NavLink, Outlet } from 'react-router-dom';
import { BiSelectMultiple } from 'react-icons/bi';
import { TbBrandBooking } from 'react-icons/tb';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='flex my-1 h-screen'>

            <div className='w-2/6 bg-purple-400 p-5 rounded-md shadow'>

                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>

                {/* they are condition rendering here */}
                <div className='my-3 font-semibold'>
                    <NavLink to='/dashboard/myclass' className='flex items-center hover:font-bold transition mb-1'>
                        <BiSelectMultiple className='w-6 h-6 mx-1'></BiSelectMultiple> My Selected Class
                    </NavLink>
                    <NavLink className='flex items-center hover:font-bold transition mb-1'>
                        <TbBrandBooking className='w-6 h-6 mx-1'></TbBrandBooking> My Enrolled Classes
                    </NavLink>
                </div>

            </div>


            <div className='w-4/6 flex justify-center items-center'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;