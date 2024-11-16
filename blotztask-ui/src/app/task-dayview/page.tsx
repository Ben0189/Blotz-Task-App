'use client';

import { useEffect, useState } from 'react';
import { z } from 'zod';
import { TaskDTO, taskDTOSchema } from './schema/schema'
import { H1, H5 } from '@/components/ui/heading-with-anchor';
import { fetchTaskItemsDueToday } from '@/services/taskService';

export default function Dayview() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

//   const handleCheckboxChange = (taskId) => {
//     setTasks((prevTasks) =>
//       prevTasks.map((t) => {
//         if (t.id === taskId) {
//           return { ...t, isDone: !t.isDone };
//         }
//         return t;
//       })
//     );
//   };

  const loadTasks = async () => {
    const data = await fetchTaskItemsDueToday();
    const validatedTasks = z.array(taskDTOSchema).parse(data);
    setTasks(validatedTasks);
}

  useEffect(() => {
    loadTasks();
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

        <div className="grid gap-6 w-full">

          {tasks.map((task) => (
            <div key={task.id} className='w-full'>
                <div className='flex flex-row'>
                    <div className={`flex justify-center items-center rounded-xl bg-work-label mr-2 w-1/3 p-4`}>
                        <p>{task.title}</p>
                    </div>
                    <div className={`flex justify-center items-center rounded-xl bg-work-label grow`}>
                        <p>{task.description}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
