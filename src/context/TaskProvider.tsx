import { useEffect, useReducer } from 'react';

import { tasksReducer } from '../reducer/TasksReducer';
import { TasksContext } from './TasksContext';

import { getTasks } from '../api/TaskService';

export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    useEffect(() => {
        const populateTasks = async () => {
            try {
              const tasks = await getTasks();
              // For testing purposes
              const only4Tasks = tasks.slice(0, 4);  
              dispatch({ type: 'fetched', payload: only4Tasks });
            } catch (error) {
               if (error instanceof Error) {
               console.error('Error fetching tasks:', error.message);
               }
            }
        };
        
        populateTasks();
     }, []);

    return (
        <TasksContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TasksContext.Provider>
    );
}