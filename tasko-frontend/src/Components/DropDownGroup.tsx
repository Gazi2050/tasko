import CategoryDropdown from './CategoryDropdown';
import StatusDropdown from './StatusDropdown';

const DropDownGroup = () => {
    return (
        <div className='hidden lg:flex items-center'>
            <CategoryDropdown />
            <StatusDropdown />
        </div>
    );
};

export default DropDownGroup;