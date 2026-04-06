import { useTasks } from "../../hooks/useTasks";

import { TaskItem } from "./TaskItem";

export const TaskList: React.FC = () => {

    const { tasks } = useTasks();

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};