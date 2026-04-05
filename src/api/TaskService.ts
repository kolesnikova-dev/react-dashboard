import type { DummyTaskData } from "../types";

const TODOS_URL = 'https://dummyjson.com/todos';

const fetchDummyTaskData = async () => {
    try {
        const response = await fetch(TODOS_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const tasks = await response.json();
        console.log('Fetched tasks:', tasks);
        return tasks;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;

    }
}

export const getProcessedTasks = async () => {
    const dummyJsonTasks = await fetchDummyTaskData();
    let processedDummyJsonTasks;
    if (dummyJsonTasks && dummyJsonTasks.todos) {
        processedDummyJsonTasks = dummyJsonTasks.todos.map((task: DummyTaskData) => ({
            id: task.id,
            description: task.todo,
        }));
    }
    return processedDummyJsonTasks;
}