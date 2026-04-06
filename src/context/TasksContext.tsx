import { createContext, type Dispatch } from 'react';

import type { TaskData } from '../types';

type TaskAction = 
  | { type: 'add'; payload: TaskData }
  | { type: 'edit'; payload: TaskData }
  | { type: 'delete'; payload: TaskData };

interface TasksContextType {
    tasks: TaskData[];
    dispatch: Dispatch<TaskAction>;
}

export const TasksContext = createContext<TasksContextType | undefined>(undefined);

