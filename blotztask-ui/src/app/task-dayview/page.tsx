'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { taskDto } from './models/taskDto';
import { TaskDTO, taskDTOSchema } from './schema/schema';
import { Button } from '@/components/ui/button';
import { TaskForm } from './components/form';
import { H1, H5 } from '@/components/ui/heading-with-anchor';

// Define mock data
const mockTasks: taskDto[] = [
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
    description: 'Discuss the project milestones and deadlines with the team.',
    isDone: false,
    createdAt: '2024-07-21T10:00:00Z',
    updatedAt: '2024-07-21T10:00:00Z',
  },
];

const validatedTasks = z.array(taskDTOSchema).parse(mockTasks);

// Simulate a database read for tasks.
export default function Dayview() {
  const [tasks, setTasks] = useState<TaskDTO[]>(validatedTasks);

  //add a state for add task button deciding to hide or show the form
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleCheckboxChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => {
        if (t.id === taskId) {
          return { ...t, isDone: !t.isDone };
        }
        return t;
      })
    );
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  useEffect(() => {
    // Simulate fetching tasks
    setTasks(validatedTasks);
  }, []);

  return (
    <>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
          <H1 className="heading-primary">
            Day
            <span className="heading-secondary">View</span>
          </H1>        
          <H5>
              List of today&apos;s task
          </H5>
        </div>

        <div className="grid gap-6 w-3/4">

          {tasks.map((task) => (
            <div className='w-full'>
                <div className='flex flex-row'>
                    <div key={task.id} className={`flex justify-center items-center rounded-xl bg-${"work"}-label mr-2 w-[15rem] p-4`}>
                        <p>{task.title}</p>
                    </div>
                    <div key={task.id} className={`flex justify-center items-center rounded-xl bg-${"work"}-label grow`}>
                        <p>{task.description}</p>
                    </div>
                </div>
            </div>
          ))}

          <div className="w-1/2 flex gap-5 flex-col">
            <Button className="self-start" onClick={toggleFormVisibility}>Add task</Button>
            {isFormVisible && (
              <Card>
                <CardHeader className="pb-1"></CardHeader>
                <CardContent className="grid gap-1">
                  <TaskForm setTasks={setTasks} />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
