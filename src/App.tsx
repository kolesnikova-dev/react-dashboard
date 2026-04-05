import { useEffect, useState } from 'react'

import { TasksContext } from './context/TasksContext'

import { getProcessedTasks } from './api/TaskService';

import { Dashboard } from './components';

import type { TaskData } from './types';

import './App.css'

function  App() {
     const [tasks, setTasks] = useState<TaskData[]>([]);

     useEffect(() => {
        const getTasks = async () => {
            try {
              const tasks = await getProcessedTasks();
              setTasks(tasks);
            } catch (error) {
              console.error('Error fetching tasks:', error);
            }
        };
        
        getTasks();
     }, []);

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            <Dashboard />
        </TasksContext.Provider>
    );
}

export default App
