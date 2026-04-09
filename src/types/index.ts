export type Status = 'todo' | 'in-progress' | 'done';
export type Priority = 'unprioritized' | 'low' | 'medium' | 'high' | 'critical';

export interface DummyTaskData {
    id: string;
    todo: string;  
    status: boolean;
    userId: number;
}

export interface TaskData {
    id: string;
    description: string;
    status: Status;
    priority: Priority;
    createdAt: string;
    updatedAt: string;
}

export type SortBy = 'createdAt' | 'updatedAt';
export type SortOrder = 'asc' | 'desc';

export interface FilterOptions {
    status?: Status;
    priority?: Priority;
    searchQuery?: string;
    sortBy?: SortBy;
    sortOrder?: SortOrder;
}

export type TaskAction = 
  | { type: 'add'; payload: Omit<TaskData, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'priority'> }
  | { type: 'edit'; payload: TaskData }
  | { type: 'delete'; payload: { id: string } }
  | { type: 'fetched'; payload: TaskData[] }
