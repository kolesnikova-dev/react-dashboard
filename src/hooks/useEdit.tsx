import { useState } from "react";
import { useTasks } from "./internal";  


export const useEdit = () => {
    const { tasks } = useTasks();
    const [ isEditing, setIsEditing ] = useState(false);
    const [ currentEditTaskId, setCurrentEditTaskId ] = useState<string | null>(null);

    const handleEdit = (taskId: string) => {
        setIsEditing(true);
        const taskToEdit = tasks.find(task => task.id === taskId); 
        if (taskToEdit && currentEditTaskId !== taskId) {
            setCurrentEditTaskId(taskId);
            // Here you would typically open a modal or navigate to an edit page
            // For demonstration, we'll just log the task to be edited
            console.log("Editing task:", taskToEdit);
        } else if (taskToEdit && currentEditTaskId === taskId){
            setIsEditing(false);
            setCurrentEditTaskId(null);
            console.log("Not editing task:", taskToEdit);
        } else {
            console.error("Task not found for editing:", taskId);
        }  
    }  
    
    return { handleEdit, isEditing, currentEditTaskId, setCurrentEditTaskId };
}