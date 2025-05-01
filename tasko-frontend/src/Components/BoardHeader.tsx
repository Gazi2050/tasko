import { FaFileMedical } from "react-icons/fa";
import DropDownGroup from "./DropDownGroup";
const BoardHeader = () => {
    return (
        <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div>
                <p className="text-2xl font-semibold">All Task List</p>
            </div>
            <div className="flex  gap-3 items-center">
                <DropDownGroup />
                <button className="flex items-center gap-2 bg-[#60E5AE] text-black font-medium px-5 py-2.5 rounded-xl shadow-md hover:bg-[#4cd3a0] transition-all duration-200 cursor-pointer">
                    <FaFileMedical className="text-lg" />
                    <span>Add New Task</span>
                </button>

            </div>
        </div>
    );
};

export default BoardHeader;