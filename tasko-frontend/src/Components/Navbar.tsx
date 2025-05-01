import { FaClipboardList } from "react-icons/fa";
import { ImStopwatch } from "react-icons/im";
import { PiSpinnerFill } from "react-icons/pi";
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav className="bg-transparent px-4 py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-2xl font-bold text-white flex  items-center gap-2">
                    <div className="bg-gray-600/30 p-3 rounded-xl">
                        <ImStopwatch size={25} />
                    </div>
                    <p>Tasko</p>
                </div>

                <div className="flex space-x-6 text-sm md:text-base">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center gap-1 hover:text-teal-400 transition-colors duration-200 ${isActive ? "text-[#60E5AE] font-semibold" : "text-white"
                            }`
                        }
                    >
                        <FaClipboardList size={20} />
                        <p> Task List</p>
                    </NavLink>
                    <NavLink
                        to="/spin"
                        className={({ isActive }) =>
                            `flex items-center gap-1 hover:text-teal-400 transition-colors duration-200 ${isActive ? "text-[#60E5AE] font-semibold" : "text-white"
                            }`
                        }
                    >
                        <PiSpinnerFill size={20} />
                        Spin
                    </NavLink>
                </div>

                <div className="text-sm text-white">
                    Name
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
