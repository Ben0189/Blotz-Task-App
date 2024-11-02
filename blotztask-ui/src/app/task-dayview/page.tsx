'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { Checkbox } from '@/components/ui/checkbox';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { taskDto } from './models/taskDto';
import { TaskDTO, taskDTOSchema } from './schema/schema';
import { Button } from '@/components/ui/button';
import { TaskForm } from './components/form';
import { H1, H5 } from '@/components/ui/heading-with-anchor';
import { fetchTaskItemsDueToday } from '@/services/taskService';

export default function Dayview() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);

  //add a state for add task button deciding to hide or show the form
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

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

        <div className="grid gap-6 w-3/4">

          {tasks.map((task) => (
            <div key={task.id} className='w-full'>
                <div className='flex flex-row'>
                    <div className={`flex justify-center items-center rounded-xl bg-${"work"}-label mr-2 w-[15rem] p-4`}>
                        <p>{task.title}</p>
                    </div>
                    <div className={`flex justify-center items-center rounded-xl bg-${"work"}-label grow`}>
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
