import { errorImg } from '../Constants/data';
import { Link } from 'react-router';

const ErrorComponent = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="bg-white border border-gray-200 p-10 md:p-16 rounded-3xl shadow-2xl text-center w-full max-w-4xl">
                <img
                    src={errorImg}
                    alt="Error"
                    className="mx-auto mb-8  object-contain"
                />
                <Link
                    to="/"
                    className="inline-block bg-[#60E5AE] text-black font-semibold px-8 py-3 rounded-xl shadow hover:bg-[#4cd3a0] transition"
                >
                    Back To Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorComponent;
