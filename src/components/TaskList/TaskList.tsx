import { useTasks } from "../../hooks/useTasks";

import { ResponsiveTable } from "../internal";

const convertToDateString = (date: string) => {
    return new Date(date).toDateString();
}


const DeleteButton = ({ taskId }: { taskId: string }) => {
    const { dispatch } = useTasks();

    const handleDelete = (taskId: string) => {
    // Implementation for delete functionality
    if (window.confirm("Are you sure you want to delete this task?")) {
        dispatch({ type: 'delete', payload: { id: taskId } });
    }
}

    return (
        <button 
            className="cursor-pointer bg-red-950 hover:bg-amber-800 text-white px-2 py-1 rounded"
            onClick={() => handleDelete(taskId)}>
                Delete
        </button>
     );
}

export const TaskList: React.FC = () => {

    const { tasks } = useTasks();

    const tableProps = {
        tableHeads: ["Description", "Status", "Priority", "Created At", "Updated At", "Actions"],
        tableData: tasks.map((task) => {
            const createdAt = convertToDateString(task.createdAt);
            const updatedAt = convertToDateString(task.updatedAt);
            return {
                id: task.id,    
                cells: {
                    Description: task.description,
                    Status: task.status,
                    Priority: task.priority,
                    "Created At": createdAt,
                    "Updated At": updatedAt,
                    Button: <DeleteButton  taskId={task.id} />, // Placeholder for the buttons cell
                }
            }
        })
    }

    return (
        <ResponsiveTable {...tableProps} />
    );
};