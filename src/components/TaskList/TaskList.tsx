import { useTasks } from "../../hooks/useTasks";

import { ResponsiveTable } from "../internal";

const convertToDateString = (date: string) => {
    return new Date(date).toDateString();
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
                    Button: null, // Placeholder for the buttons cell
                }
            }
        })
    }

    return (
        <ResponsiveTable {...tableProps} />
    );
};