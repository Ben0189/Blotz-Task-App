'use client';

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
      <div className="flex flex-col gap-5 md:items-center md:p-28">
        <div className="mt-[-100px]">
          <img
            src="/assets/images/profileImage.png"
            alt="an incredable image"
            className="w-[120px] h-[120px] "
          />
        </div>
        <div>
          <p className="font-arial font-bold text-[40px] leading-[100px] tracking-[-0.41px] text-center text-secondary">
            You planned{' '}
            <span className="font-arial font-bold text-[123px] leading-[100px] tracking-[-0.41px] text-center text-secondary">
              <CountUp end={taskCount} />{' '}
            </span>
            tasks this month
          </p>
        </div>
      </div>
    </>
  );
}
