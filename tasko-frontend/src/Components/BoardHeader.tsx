import DropDownGroup from "./DropDownGroup";
const BoardHeader = () => {
    return (
        <div className="flex justify-between">
            <div>
                <p>All Task List</p>
            </div>
            <div>
                <DropDownGroup />
            </div>
        </div>
    );
};

export default BoardHeader;