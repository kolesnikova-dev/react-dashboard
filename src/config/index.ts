export const STATUS = {
  'todo': {
    displayName: 'Pending',
    code: 'todo',
  },
  inProgress: {
    displayName: 'In Progress',
    code: 'in-progress',
  },
  'done': {
    displayName: 'Completed',
    code: 'done',
  },
} as const;
export const STATUS_IN_PROGRESS = STATUS.inProgress.code;
export const PRIORITY = {
  default: 'Unprioritized',
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  critical: 'Critical',
};
export const CRITICAL_PRIORITY = PRIORITY.critical;
