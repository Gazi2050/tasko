import Banner from "./Banner";
import Navbar from "./Navbar";

const Home = () => {
    // from-[#275A4D] via-black to-[#275A4D]
    return (
        <div>
            <div className="bg-gradient-to-r from-[#275A4D] via-black to-[#275A4D]">
                <Navbar />
                <Banner />
            </div>

        </div>
    );
};

export default Home;