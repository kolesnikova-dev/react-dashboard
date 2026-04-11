import { Fragment } from 'react/jsx-runtime';

import { useTasks } from '../../hooks/index';

import { WideNarrowGrid } from '../internal';

import { STATUS, STATUS_IN_PROGRESS, CRITICAL_PRIORITY } from '../../config';


const StatisticsRow = ({ displayName, count }: {displayName: string, count: number}) => {
  return (
    <>
      <span className='text-left'>{displayName}</span>
      <span className='text-left'>{count}</span>
    </>
  );
};

export const Statistics = () => {
  const { tasks } = useTasks();

  const getStatusCount = (status: string) => {
    return tasks.filter(task => task.status === status).length;
  };

  const pendingCriticalTasks = {
    count: tasks.filter(task => task.status === STATUS_IN_PROGRESS && task.priority === CRITICAL_PRIORITY).length,
    displayName: 'Critical pending tasks',
  };

  return (
    <WideNarrowGrid>
      <StatisticsRow displayName={pendingCriticalTasks.displayName} count={pendingCriticalTasks.count} />
      {Object.entries(STATUS).map(([statusCode, { displayName }]) => (
        <Fragment key={statusCode}>
          <StatisticsRow displayName={displayName} count={getStatusCount(statusCode)} />
        </Fragment>
      ))}
    </WideNarrowGrid >
  );
};
