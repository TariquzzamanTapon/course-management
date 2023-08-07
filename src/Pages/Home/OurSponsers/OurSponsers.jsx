import React from 'react';
import Marquee from 'react-fast-marquee';

const OurSponsers = () => {
    return (
        <div>
            <div className="my-4 md:my-12">
                <h1 className='text-xl md:text-4xl text-center font-bold mb-2'>Our Sponsored</h1>
                <p className='mb-6 text-center text-xl'>Tempora nisi rem possimus. Corporis quos quia eum, culpa aperiam et officia. Lorem ipsum dolor sit amet consectetur <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur doloribus ipsam</p>
                <div>
                    <Marquee>
                        <div className='mx-10'>
                            <img className='w-28' src="https://cdn-icons-png.flaticon.com/512/270/270799.png?w=740&t=st=1686370442~exp=1686371042~hmac=7dd2e3a89314fed7578c0f1f3a33a22840e2163544fbf09f583716c29a9021f8" alt="" />
                        </div>
                        <div className='mx-10'>
                            <img className='w-28' src="https://cdn-icons-png.flaticon.com/512/732/732221.png?w=740&t=st=1686372649~exp=1686373249~hmac=9864f42d029b91ec8698ee381a1716663c57498b6174a506750b7cf6b0bc29aa" alt="" />
                        </div>
                        <div className='mx-10'>
                            <img className='w-28' src="https://cdn-icons-png.flaticon.com/512/145/145802.png?w=740&t=st=1686372697~exp=1686373297~hmac=c87039ce52cf3639b02d44326f754aac16891c6aa5e57676441f70d5fc2880b2" alt="" />
                        </div>
                        <div className='mx-10'>
                            <img className='w-28' src="https://cdn-icons-png.flaticon.com/512/1051/1051336.png?w=740&t=st=1686372793~exp=1686373393~hmac=651fb059a9c5ce27897b9dd33d70ecabb9e1783d0c478dce562af0aa4bbf011d" alt="" />
                        </div>
                        <div className='mx-10'>
                            <img className='w-28' src="https://img.freepik.com/free-vector/orange-logo-arrow-shape_1043-53.jpg?w=740&t=st=1686372958~exp=1686373558~hmac=db7687feb9f735b21666cdbc59a176f871b1f82161655e540c141428dc722256" alt="" />
                        </div>
                        <div className='mx-10'>
                            <img className='w-28' src="https://cdn-icons-png.flaticon.com/512/882/882829.png?w=740&t=st=1686373030~exp=1686373630~hmac=26fdf479655d12502a969cc48049c21a914c70c1599164231fd8c041a9fa2ce7" alt="" />
                        </div>
                        <div className='mx-10'>
                            <img className='w-28' src="https://img.freepik.com/free-vector/blue-letter-b-logo_1071-99.jpg?w=740&t=st=1686373161~exp=1686373761~hmac=1dc34b51fec91d44925501cc9a33373d450e83bf8d8b09f13f4548f5bbb88daa" alt="" />
                        </div>


                    </Marquee>
                </div>
            </div>

        </div>
    );
};

export default OurSponsers;