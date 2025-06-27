import React, { useContext } from 'react';
import Favicon from '../assets/Favicon.png'
import { Mycontext } from '../Context';
import { Link } from 'react-router-dom';

const SidBar = () => {
  const { Years } = useContext(Mycontext)

  return (
    <nav className='w-[200px] h-dvh bg-amber-300 flex flex-col gap-10'>
      <div className='w-[200px] h-[130px] flex flex-col justify-center items-center mt-2'>
        <img className='w-[110px] h-[110px]' src={Favicon} alt="" />
        <span className='font-black text-xl'>HowksCute</span>
      </div>

      <ul className='p-5 flex flex-col bg-amber-50 gap-5'>
        <Link to={'/'}>
          <li className='hover:bg-amber-700 text-xl pl-1 py-1 '>Home</li>
        </Link>

        {/* <!-- Dropdown --> */}
        {/* <li className='hover:bg-amber-700 text-xl pl-1 py-1 '>Years</li>
        <ul className="h-[145px] overflow-scroll py-1 bg-white divide-y divide-gray-100 rounded-md shadow-lg flex-none">
          {
            Years.map((y) =>
              <li className="px-4 py-2 my-0.5 text-lg hover:bg-amber-500">{y}</li>
            )
          }
        </ul> */}

        <li className='hover:bg-amber-700 text-xl pl-1 py-1 '>How To</li>

        <Link to={'/contact'}>
          <li className='hover:bg-amber-700 text-xl pl-1 py-1 '>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default SidBar;