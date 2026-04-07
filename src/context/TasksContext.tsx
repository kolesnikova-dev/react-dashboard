import { createContext, type Dispatch } from 'react';

import type { TaskData, TaskAction } from '../types';

interface TasksContextType {
    tasks: TaskData[];
    dispatch: Dispatch<TaskAction>;
}

export const TasksContext = createContext<TasksContextType | undefined>(undefined);

