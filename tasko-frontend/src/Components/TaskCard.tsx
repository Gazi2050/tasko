import { FaCalendarAlt, FaTrashAlt } from "react-icons/fa";
import { HiMiniSwatch } from "react-icons/hi2";

const TaskCard = () => {
    return (
        <div className="max-w-sm mx-auto border border-[#E1E1E1] bg-white shadow-sm rounded-lg p-4 flex flex-col space-y-2">
            {/* Header Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    {/* Icon Circle */}
                    <div className="w-8 h-8 bg-[#60E5AE] rounded-full flex items-center justify-center">
                        <span className="text-black">
                            <HiMiniSwatch />
                        </span>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">Art and Craft</h2>
                </div>
                {/* Trash Icon */}
                <FaTrashAlt className="text-red-500 cursor-pointer" />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600">
                Select the role that you want to candidates for and upload your job description.
            </p>

            {/* Footer Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <FaCalendarAlt className="text-gray-500" />
                    <span className="text-sm text-gray-600">Friday, April 19 – 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span className="text-sm text-purple-500 font-medium">Pending</span>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;