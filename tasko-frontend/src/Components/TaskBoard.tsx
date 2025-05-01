import BoardHeader from "./BoardHeader";
import TaskCard from "./TaskCard";

const TaskBoard = () => {
    return (
        <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-3xl shadow-xl p-8 -mt-14">
            <BoardHeader />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 overflow-y-auto max-h-80">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>

        </div>

    );
};

export default TaskBoard;