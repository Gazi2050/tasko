import { useState } from 'react';

const CategoryDropdown = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Family');

    const categories = [
        'Arts and Craft',
        'Nature',
        'Family',
        'Sport',
        'Friends',
        'Meditation',
    ];

    return (
        <div className="flex space-x-4 p-4 cursor-pointer">
            <div className="relative">
                <button
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                    className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center justify-between "
                >
                    Select Task Category
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

                {isCategoryOpen && (
                    <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        <ul className="py-2">
                            {categories.map((category) => (
                                <li
                                    key={category}
                                    className={`px-4 py-2 text-sm ${selectedCategory === category
                                        ? 'bg-green-100 text-gray-900'
                                        : 'text-gray-700'
                                        } hover:bg-gray-100 flex items-center`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedCategory === category}
                                        onChange={() => setSelectedCategory(category)}
                                        className="mr-2"
                                    />
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryDropdown;