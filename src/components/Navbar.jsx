import { Link } from 'react-router-dom';

function Navbar() {
  return (
      <div className="w-full py-4 flex px-32 bg-[#1b1a1c] justify-between z-[999] fixed ">
          <img src="icon.png" className='h-12 bg-[#1b1a1c]' alt="" />
          <div className='flex items-center justify-center bg-[#1b1a1c]'>

            <Link className='bg-[#1b1a1c]' to='/home'>
              <div className='bg-[#1b1a1c] text-white-text text-xl mr-8'>Home</div>
            </Link>

            <Link className='bg-[#1b1a1c]' to='/projects'>
              <div className='bg-[#1b1a1c] text-white-text text-xl mr-8'>Projects</div>
            </Link>

            <Link className='bg-[#1b1a1c]' to='/blog'>
              <div className='bg-[#1b1a1c] text-white-text text-xl mr-8'>Blog</div>
            </Link>

            <Link className='bg-[#1b1a1c]' to='/profile'>
              <div className='bg-[#1b1a1c] text-white-text text-xl'>Profile</div>
            </Link>

          </div>
      </div>
  );
}

export default Navbar