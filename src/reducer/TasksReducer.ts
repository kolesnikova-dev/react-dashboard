import type { TaskData, TaskAction } from "../types";

const TODAY = new Date().toLocaleDateString();
const RANDOM_ID = Math.floor((Math.random() * 100000) + 1).toFixed();

export function tasksReducer (tasks: TaskData[], action: TaskAction): TaskData[] {
  switch (action.type) {
    case 'add': {
      return [...tasks, {
        id: RANDOM_ID,
        description: action.payload.description,
        status: "todo",
        priority: "unprioritized",
        createdAt: TODAY,
        updatedAt: TODAY,
      }];
    }
    case 'edit': {
      return tasks.map(t => {
        if (t.id === action.payload.id) {
          return action.payload;
        } else {
          return t;
        }
      });
    }
    case 'delete': {
      return tasks.filter(t => t.id !== action.payload.id);
    }
    case 'fetched':
      return action.payload;;
    default: {
      const _exhaustiveCheck: never = action;
      return _exhaustiveCheck;
    }
  }
}