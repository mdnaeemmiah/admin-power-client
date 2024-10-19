import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { useState } from "react";
import useAxiosSecure from "../hook/useAxiosSecure";
import toast from "react-hot-toast";
import HostModal from "../Modal/HostModal";


const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => {
    setIsModalOpen(false)
  }
  const modalHandler = async () => {
    console.log('I want to be a admin')
    try {
      const currentUser = {
        email: user?.email,
        role: 'guest',
        status: 'Requested',
      }
      const { data } = await useAxiosSecure.put(`/user`, currentUser)
      console.log(data)
      if (data.modifiedCount > 0) {
        toast.success('Success! Please wait for admin confirmation')
      } else {
        toast.success('Please!, Wait for admin approval👊')
      }
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    } finally {
      closeModal()
    }
  }

  const links = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/login'>Login</Link></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
  </>
  return (
    <div className="navbar bg-slate-300 rounded-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Admin Power</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        {/* Become A admin btn */}
        <div className='hidden md:block'>
          {/* {!user && ( */}
          <button
            // disabled={!user}
            onClick={() => setIsModalOpen(true)}
            className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
          >
            Admin your home
          </button>
          {/* )} */}
        </div>
        {/* Modal */}
        <HostModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          modalHandler={modalHandler}
        />
        <Link to='/login' onClick={logOut}  className="btn">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;