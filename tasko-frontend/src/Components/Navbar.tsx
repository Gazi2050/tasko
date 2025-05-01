import { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { ImStopwatch } from "react-icons/im";
import { PiSpinnerFill } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="relative bg-transparent px-4 py-4 z-50">
            {/* Navbar container with logo, desktop nav, user name, and mobile toggle */}
            <div className="max-w-7xl mx-auto relative flex items-center justify-between">

                {/* Logo Section */}
                <Link to='/' className="flex items-center gap-3 text-white text-2xl font-bold">
                    <div className="bg-gray-600/30 p-3 rounded-2xl shadow">
                        <ImStopwatch size={24} />
                    </div>
                    <span>Tasko</span>
                </Link>

                {/* Centered Navigation Links for Desktop */}
                <div className="hidden md:flex gap-8 text-white text-sm absolute left-1/2 transform -translate-x-1/2">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-2 hover:text-teal-400 transition ${isActive ? "text-[#60E5AE] font-semibold" : ""}`
                        }
                    >
                        <FaClipboardList size={18} />
                        Task List
                    </NavLink>
                    <NavLink
                        to="/spin"
                        className={({ isActive }) =>
                            `flex items-center gap-2 hover:text-teal-400 transition ${isActive ? "text-[#60E5AE] font-semibold" : ""}`
                        }
                    >
                        <PiSpinnerFill size={18} />
                        Spin
                    </NavLink>
                </div>

                {/* Right-aligned user name (Desktop only) */}
                <div className="hidden md:block text-white text-sm font-medium">
                    Thomas
                </div>

                {/* Mobile hamburger menu toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu with animation */}
            <div
                className={`absolute top-full left-4 right-4 mt-2 bg-black/80 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 origin-top transform ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
                    } md:hidden`}
            >
                <div className="flex flex-col gap-3 px-4 py-4 text-white text-sm">
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition ${isActive ? "text-[#60E5AE] font-semibold" : ""}`
                        }
                    >
                        <FaClipboardList size={18} />
                        Task List
                    </NavLink>
                    <NavLink
                        to="/spin"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition ${isActive ? "text-[#60E5AE] font-semibold" : ""}`
                        }
                    >
                        <PiSpinnerFill size={18} />
                        Spin
                    </NavLink>
                    <div className="border-t border-gray-600 pt-3 px-3 text-sm">
                        Hello, Thomas
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
