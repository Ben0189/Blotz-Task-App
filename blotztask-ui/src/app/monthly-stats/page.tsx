'use client';

import { H1, H5 } from '@/components/ui/heading-with-anchor';
import { mock } from 'node:test';
import CountUp from 'react-countup';
export default function Monthlystats() {
  const mockTasks = [
    {
      id: 1,
      title: 'Complete project report',
      description: 'Finalize the project report and submit it to the manager.',
      isDone: false,
      createdAt: '2024-07-20T08:30:00Z',
      updatedAt: '2024-07-20T08:30:00Z',
    },
    {
      id: 2,
      title: 'Meeting with the team',
      description:
        'Discuss the project milestones and deadlines with the team.',
      isDone: false,
      createdAt: '2024-07-21T10:00:00Z',
      updatedAt: '2024-07-21T10:00:00Z',
    },
  ];

  const taskCount = mockTasks.length;
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <H1 className="heading-primary" style={{ textAlign: 'center' }}>
            Monthly Summary
          </H1>
          <H5 style={{ textAlign: 'center' }}>
            You planned <CountUp end={taskCount} /> tasks this month
          </H5>
        </div>
      </div>
    </>
  );
}
