import { dashboardHeader } from "../../tailwindStyles"

export const DashboardHeader = () => {
  return (
    <h1 className={dashboardHeader}>
        <span className="font-mono">🌙 TASK DASHBOARD</span>
        <span className="">☀️</span>
    </h1>
  )
}
