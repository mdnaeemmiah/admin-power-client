import { Helmet } from "react-helmet";
import { FaSearch } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { LuHome } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="flex flex-col min-h-screen  p-3 w-72 bg-orange-400">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h2>Dashboard</h2>
                        <button className="p-2">
                            <IoMdMenu />
                        </button>
                    </div>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button type="submit" className="p-2 focus:outline-none focus:ring">
                                <FaSearch />
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border- rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link to='/' rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <LuHome />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <FaSearch />
                                    <span>Search</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <IoSettingsSharp />
                                    <span>Settings</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <GrLogout />
                                    <span>Logout</span>
                                </a>
                            </li>
                            <div className="divider"></div>
                            <li className="rounded-sm">
                                <Link to='all-users' rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                   
                                    <span>All Users</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to='add-doctor' rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                  
                                    <span>Add a Doctor</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link to='manage' rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                   
                                    <span>Manage Doctors</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                    <span>Home</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;