import { useTasks } from '../../hooks/index';

import { WideNarrowGrid } from '../internal';


export const Statistics = () => {
  const { tasks } = useTasks();
  const totalTasks = tasks.length;
  return (
    <WideNarrowGrid >
      <span className='text-left'>Total:</span><span className='text-left'>{totalTasks}</span>
    </WideNarrowGrid >
  );
};
