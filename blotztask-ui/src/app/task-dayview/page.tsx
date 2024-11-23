'use client';

import { useEffect, useState } from 'react';
import { z } from 'zod';
import { TaskDTO, taskDTOSchema } from './schema/schema';
import { H1, H5 } from '@/components/ui/heading-with-anchor';
import { fetchTaskItemsDueToday } from '@/services/taskService';
import { Checkbox } from '@/components/ui/checkbox';

export default function Dayview() {
  const [incompleteTasks, setIncompleteTasks] = useState<TaskDTO[]>([]);

  useEffect(() => {
    loadIncompleteTasks();
  }, []);

  const loadIncompleteTasks = async () => {
    try {
      const data = await fetchTaskItemsDueToday();
      const validatedTasks = z.array(taskDTOSchema).parse(data);

      // Filter tasks to only include those where isDone is false
      const notDoneTasks = validatedTasks.filter((task) => !task.isDone);
      setIncompleteTasks(notDoneTasks);
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked); 
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <H1 className="heading-primary">
            Day
            <span className="heading-secondary">View</span>
          </H1>
          <H5>List of today&apos;s task</H5>
        </div>

        <div className="grid gap-6 w-full">
          {incompleteTasks.length > 0 ? (
            <div className="grid gap-6 w-full">
              {incompleteTasks.map((task) => (
                <div key={task.id} className="w-full">
                  <div className="flex flex-row">
                    <div
                      className={`flex justify-center items-center rounded-xl bg-work-label mr-2 w-1/3 p-4`}
                    >
                      <p>{task.title}</p>
                    </div>
                    <div
                      className={`flex justify-center items-center rounded-xl bg-work-label grow`}
                    >
                      <p>{task.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No incomplete tasks for today!</p>
          )}
        </div>

          <div className="flex flex-row justify-start space-x-4">
            <Checkbox
                checked={isChecked} 
                onCheckedChange={handleCheckboxChange} 
                className="h-8 w-8 rounded-md border-transparent bg-gray-400"
            />
          </div>

      </div>
    </>
  );
}
