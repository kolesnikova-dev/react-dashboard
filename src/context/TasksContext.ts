import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { TaskData } from '../types';

interface TasksContextType {
    tasks: TaskData[];
    setTasks: Dispatch<SetStateAction<TaskData[]>>;
}

export const TasksContext = createContext<TasksContextType>({
    tasks: [],
    setTasks: () => {}
});