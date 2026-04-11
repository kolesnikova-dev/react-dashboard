import { useEdit, useTasks } from "../../hooks/index";

import { ResponsiveTable } from "../internal";

const convertToDateString = (date: string) => {
    return new Date(date).toDateString();
}

const CELL_STYLES = {
    editbgColor: "bg-violet-950",
    deleteBgColor: "bg-red-950",
    hover: `hover:bg-amber-800`,
}

const DeleteButton = ({ taskId }: { taskId: string }) => {
    const { dispatch } = useTasks();
    // Generate a random key for the button

    const handleDelete = (taskId: string) => {
    // Implementation for delete functionality
    if (window.confirm("Are you sure you want to delete this task?")) {
        dispatch({ type: 'delete', payload: { id: taskId } });
    }
}

    return (
        <button 
            className={`cursor-pointer ${CELL_STYLES.deleteBgColor} ${CELL_STYLES.hover} text-white px-2 py-1 roundes`}
            onClick={() => handleDelete(taskId)}>
                Delete
        </button>
     );
}

const EditButton = ({ taskId }: { taskId: string }) => {
    const { tasks } = useTasks();
    const { setCurrentEditTaskId } = useEdit();

    const handleEdit = (taskId: string) => {
        const taskToEdit = tasks.find(task => task.id === taskId);
        if (taskToEdit && taskToEdit.id === taskId) {
            setCurrentEditTaskId(taskId);
            console.log("Editing task:", taskToEdit, taskId);     
        }
    }
    const hover = `transition ease-in-out ${CELL_STYLES.hover}`;

    return (
        <button 
            className={`cursor-pointer px-4 ${CELL_STYLES.editbgColor} ${hover} py-1 text-white rounded`}
            onClick={() => handleEdit(taskId)}>
                Edit
        </button>
     );
}


// TODO: Add a fetching skeleton
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
                    Button:[ 
                        <DeleteButton  key={`delete-${task.id}`} taskId={task.id} />, 
                        <EditButton key={`edit-${task.id}`} taskId={task.id} /> ]
                }
            }
        })
    }

    return (
        <ResponsiveTable {...tableProps} />
    );
};