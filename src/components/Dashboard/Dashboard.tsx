import { TaskFilter, TaskForm, TaskList, NarrowWideGrid } from '../internal';
import { DashboardHeader } from './DashboardHeader';
import { Statistics } from '../Statistics/Statistics';

import { displayFlex } from '../../tailwindStyles';

const ContainerWithHeader = ({ header, children }: { header: string; children: React.ReactNode }) => {
  return (
    <fieldset className="border border-gray-300 p-4 rounded-md">
      <legend className="text-left text-lg font-semibold px-4 ml-6">{header}</legend>
      {children}
    </fieldset>
  );
};

export const Dashboard = () => {
  return (
    <div className={displayFlex}>
      <DashboardHeader />
      <NarrowWideGrid >
        <ContainerWithHeader header="Statistics">
          <Statistics />
        </ContainerWithHeader>
        <ContainerWithHeader header="Task Controls">
          <TaskFilter />
        </ContainerWithHeader>
        <ContainerWithHeader header="Add New Task">
          <TaskForm />
        </ContainerWithHeader>
        <ContainerWithHeader header="Task List">
          <TaskList />
        </ContainerWithHeader>
      </NarrowWideGrid >
    </div>
  );
};
