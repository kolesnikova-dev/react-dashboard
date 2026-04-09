import { useTasks } from "../../hooks/index";

import { TailwindGrid } from "../internal"; 


export const Statistics = () => {
  const {tasks} = useTasks();
  const totalTasks = tasks.length;
  return (
    <TailwindGrid>
      <div className="flex justify-around"><span>Total:</span><span>{totalTasks}</span></div>
    </TailwindGrid>
  )
}
