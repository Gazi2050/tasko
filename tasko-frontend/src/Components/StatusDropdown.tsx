import { useState } from "react";

const StatusDropdown = () => {
    const [isStatusOpen, setIsStatusOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('Pending');
    const statuses = [
        'ALL Task',
        'Ongoing',
        'Pending',
        'Collaborative Task',
        'Done',
    ];
    return (
        <div>
            <div className="relative cursor-pointer">
                <button
                    onClick={() => setIsStatusOpen(!isStatusOpen)}
                    className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center justify-between w-48"
                >
                    Pending
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </button>

                {isStatusOpen && (
                    <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        <ul className="py-2">
                            {statuses.map((status) => (
                                <li
                                    key={status}
                                    className={`px-4 py-2 text-sm ${selectedStatus === status
                                        ? 'bg-green-100 text-gray-900'
                                        : 'text-gray-700'
                                        } hover:bg-gray-100 flex items-center`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedStatus === status}
                                        onChange={() => setSelectedStatus(status)}
                                        className="mr-2"
                                    />
                                    {status}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatusDropdown;