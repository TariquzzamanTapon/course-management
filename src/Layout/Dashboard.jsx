import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProver';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { BiSelectMultiple } from 'react-icons/bi';
import { TbBrandBooking } from 'react-icons/tb';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useState } from 'react';
import useAdmin from '../componets/Firebase/Hooks/useAdmin/useAdmin';
import useInstructor from '../componets/Firebase/Hooks/useInstructor/useInstructor';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin, setIsAdmin] = useState(true);
    // const [isInstructor, setIsInstructor] = useState(false);

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className='flex my-1 h-screen'>

            <div className='w-2/6 bg-purple-400 p-5 rounded-md shadow mb-4'>
                <Link to='/'><RiArrowGoBackFill className='w-6 h-6'></RiArrowGoBackFill></Link>
                <div className="avatar online">
                    <div className="w-24 rounded-full">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <div className="divider h-4"></div>

                {/* they are condition rendering here */}
                {
                    isAdmin == true ? <>
                        <div className='my-3 font-semibold'>
                            <NavLink to='/dashboard/manage-class' className='flex items-center hover:font-bold transition mb-1'>
                                <BiSelectMultiple className='w-6 h-6 mx-1'></BiSelectMultiple> Manage Classes
                            </NavLink>
                            <NavLink to='/dashboard/manage-users' className='flex items-center hover:font-bold transition mb-1'>
                                <TbBrandBooking className='w-6 h-6 mx-1'></TbBrandBooking> Manage Users
                            </NavLink>
                        </div>
                    </>
                        :
                        isInstructor ? <>
                            <div className='my-3 font-semibold'>
                                <NavLink to='/dashboard/add-class' className='flex items-center hover:font-bold transition mb-1'>
                                    <BiSelectMultiple className='w-6 h-6 mx-1'></BiSelectMultiple> Add Class
                                </NavLink>
                                <NavLink to='/dashboard/my-class' className='flex items-center hover:font-bold transition mb-1'>
                                    <TbBrandBooking className='w-6 h-6 mx-1'></TbBrandBooking> My Classes
                                </NavLink>
                            </div>
                        </>
                            :
                            <>
                                <div className='my-3 font-semibold'>
                                    <NavLink to='/dashboard/myclass' className='flex items-center hover:font-bold transition mb-1'>
                                        <BiSelectMultiple className='w-6 h-6 mx-1'></BiSelectMultiple> My Selected Class
                                    </NavLink>
                                    <NavLink className='flex items-center hover:font-bold transition mb-1'>
                                        <TbBrandBooking className='w-6 h-6 mx-1'></TbBrandBooking> My Enrolled Classes
                                    </NavLink>
                                    <NavLink className='flex items-center hover:font-bold transition mb-1'>
                                        <TbBrandBooking className='w-6 h-6 mx-1'></TbBrandBooking>Payment History
                                    </NavLink>
                                </div>
                            </>
                }


            </div>


            <div className='w-4/6 my-20 p-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;