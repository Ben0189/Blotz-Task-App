'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { Checkbox } from '@/components/ui/checkbox';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { TaskDTO, taskDTOSchema } from './schema/schema';
import { Button } from '@/components/ui/button';
import { TaskForm } from './components/form';
import { H1, H5 } from '@/components/ui/heading-with-anchor';
import { format } from 'date-fns'
import { FaPlus } from "react-icons/fa";
import { fetchTaskItemsDueToday } from '@/services/taskService';


export default function Dayview() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [todayDate, setTodayDate] = useState('');
  //add a state for add task button deciding to hide or show the form
  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  // Define IconButton as an inner component
  const IconButton = () => (
    <div className="absolute top-50 right-40">
      <Button className="round-square bg-black text-white">
        <FaPlus className="text-4xl" aria-hidden="true" />
      </Button>
    </div>
  );

  //Page initialize
  useEffect(() => {
    // Simulate fetching tasks
    const loadTasks = async () => {
      const data = await fetchTaskItemsDueToday();
      const validatedTasks = z.array(taskDTOSchema).parse(data);
      setTasks(validatedTasks);
    }
    const date = new Date();
    setTodayDate(format(date, 'MMM dd,yyyy'))
  }, [])

  return (
    <>
      <IconButton />
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-2'>
          <H1 className="heading-primary">
            Good morning,
          </H1>
          <H1 className="text-5xl font bold text-black">
            Cornelia
          </H1>
          <div className='flex flex-col gap-2'>
            <div className="text-4xl font-bold text-center mt-[-5rem]">{todayDate}
            </div>
          </div>
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
