import { memo } from 'react';
import type{ Task } from '../features/tasks/types';

interface Props {
  task: Task;
  onClick: (id: number) => void;
}

function TaskCard({ task, onClick }: Props) {
  return (
    <div className="card" onClick={() => onClick(task.id)}>
      <h4>{task.title}</h4>

      <span className={`status ${task.completed ? 'done' : 'pending'}`}>
        {task.completed ? 'done' : 'Pending'}
      </span>
    </div>
  );
}

export default memo(TaskCard);