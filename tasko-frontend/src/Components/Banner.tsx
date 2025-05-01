import { banner } from "../Constants/data";

const Banner = () => {
    return (
        <div className="px-4 py-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Text Section */}
                <div className="text-white text-center md:text-left">
                    <p className="text-2xl font-semibold">Hi Thomas</p>
                    <p className="text-4xl font-semibold text-[#60E5AE]">Welcome to Dashboard</p>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-auto">
                    <img
                        src={banner}
                        alt="banner"
                        className="w-full opacity-30"
                    />
                </div>
            </div>
        </div>

    );
};

export default Banner;