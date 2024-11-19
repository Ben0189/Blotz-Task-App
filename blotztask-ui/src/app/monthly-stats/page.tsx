'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
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

const mockLabels = {
    "status": "success",
    "data": {
        "currentMonth": "2024-11",
        "tasks": {
            completed: {
                "personal": 70,
                "academic": 23,
                "work": 28,
            },
            unfinished: {
                "personal": 15,
                "academic": 10,
                "work": 5,
            }
        }
    }
};

  const taskCount = mockTasks.length;
  return (
        <div>
            <div className="flex flex-col gap-5 md:items-center md:p-10">
                <div className="mt-1">
                    <Image
                        src="/assets/images/profileImage.png"
                        alt="an incredable image"
                        width={150}
                        height={150}
                    />
                </div>
                <div>
                    <p className="pl-20 font-arial font-bold text-[40px] leading-[100px] tracking-[-0.41px] text-center text-secondary">
                        You planned{' '}
                        <span className="font-arial font-bold text-[120px] leading-[100px] tracking-[-0.41px] text-center text-secondary">
                        <CountUp end={taskCount} />{' '}
                        </span>
                        tasks this month
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-row gap-2'>
                <Card className='grow bg bg-completed'>
                    <CardHeader className='flex items-center bg-secondary rounded-lg'>
                        <CardTitle>Completed</CardTitle>
                    </CardHeader>
                    <CardContent>
                       
                    </CardContent>
                </Card>
                <Card className='grow bg-unfinished'>
                    <CardHeader className='flex items-center bg-unfinished-header'>
                        <CardTitle>Unfinished</CardTitle>
                    </CardHeader>
                    <CardContent className='flex items-center'>
                        <div className='flex flex-col'>

                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
  );
}
