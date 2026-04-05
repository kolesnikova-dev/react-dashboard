import { TaskFilter, TaskForm, TaskList } from '../internal';

export const Dashboard = () => {

  return (
    <div>
        <TaskFilter />
        <TaskForm />
        <TaskList />
    </div>
  )
}
