import { SetStateAction, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { HiMiniSwatch } from "react-icons/hi2";
import { LuCalendarDays } from "react-icons/lu";

const TaskDetail = () => {
    const [status, setStatus] = useState("In Progress");

    const handleStatusChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setStatus(e.target.value);
    };

    return (
        <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-xl p-6 sm:p-8 -mt-14 w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Task Details</h2>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                    <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#FFAB001A] text-gray-900 font-medium px-5 py-2.5 rounded-xl shadow-md transition-all duration-200 hover:bg-[#FFAB0033]">
                        <FaEdit />
                        Edit Task
                    </button>
                    <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-red-100 text-red-900 font-medium px-5 py-2.5 rounded-xl shadow-md transition-all duration-200 hover:bg-red-200">
                        <FaTrash />
                        Delete Task
                    </button>
                    <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-[#60E5AE] text-gray-900 font-medium px-5 py-2.5 rounded-xl shadow-md hover:bg-[#4cd3a0] transition-all duration-200">
                        Back
                    </button>
                </div>
            </div>

            <hr className="border-gray-200 my-6 sm:my-8" />

            {/* Content */}
            <div className="flex flex-col sm:flex-row justify-center items-start gap-4 sm:gap-6">
                <div className="bg-[#60E5AE] rounded-full p-4 sm:p-5 flex-shrink-0">
                    <HiMiniSwatch size={50} className="sm:w-[70px] sm:h-[70px]" />
                </div>
                <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Art and Craft</h3>
                    <p className="text-base sm:text-lg font-normal text-gray-600 leading-relaxed">
                        Select the role that you want to candidates for and upload your job description. Select the role that you want to candidates for and upload your job description.
                    </p>
                </div>
            </div>

            {/* End Date, Status, and Submit */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8 mt-6 sm:mt-8">
                {/* End Date and Status */}
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-6 sm:gap-8">
                    {/* End Date */}
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold text-gray-900">End Date</p>
                        <div className="flex items-center gap-3">
                            <LuCalendarDays size={24} className="text-gray-600" />
                            <p className="text-base sm:text-lg font-normal text-gray-600">Friday, April 19, 2024</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block border-l border-gray-300 h-10"></div>

                    {/* Status */}
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold text-gray-900">Status</p>
                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${status === "In Progress" ? "bg-[#60E5AE]" : status === "Completed" ? "bg-green-600" : "bg-gray-400"}`}></div>
                            <select
                                value={status}
                                onChange={handleStatusChange}
                                className="text-base sm:text-lg font-normal text-gray-600 border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-[#60E5AE]"
                            >
                                <option value="Not Started">Not Started</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="On Hold">On Hold</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button className="w-full sm:w-auto bg-[#60E5AE] text-gray-900 font-medium px-6 py-2.5 rounded-xl shadow-md hover:bg-[#4cd3a0] transition-all duration-200 self-end sm:self-center">
                    Submit Changes
                </button>
            </div>
        </div>
    );
};

export default TaskDetail;