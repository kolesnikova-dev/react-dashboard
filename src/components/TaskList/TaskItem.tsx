import type { TaskData } from '../../types';

export const TaskItem: React.FC<{ task: TaskData }> = ({ task }: { task: TaskData }) => {
    return (
        <li className="task-item">
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
            <p>Created At: {new Date(task.createdAt).toLocaleString()}</p>
            <p>Updated At: {new Date(task.updatedAt).toLocaleString()}</p>
        </li>
    )
};