import { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

export const useTasksContext = () => useContext(TasksContext);
