import { useTasksContext } from "../../hooks/useTasksContext";

import { TaskItem } from "./TaskItem";

export const TaskList: React.FC = () => {

    const { tasks } = useTasksContext();

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    );
};