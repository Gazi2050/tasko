import Navbar from './Navbar';
import Banner from './Banner';

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-[#275A4D] via-black to-[#275A4D]">
            <Navbar />
            <Banner />
        </div>
    );
};

export default Header;