'use client';

import { useEffect, useState } from 'react';
import { z } from 'zod';
import { TaskDTO, taskDTOSchema } from './schema/schema'
import { H1, H5 } from '@/components/ui/heading-with-anchor';
import { fetchTaskItemsDueToday } from '@/services/taskService';

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
      console.error("Error loading tasks:", error);
    }
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
        <div className = "grid gap-6 w-full">
          {incompleteTasks.length>0?(
      <div className = "grid gap-6 w-full">
        {incompleteTasks.map((task)=>(
        <div key = {task.id} className = 'w-full'>
          <div className = 'flex flex-row'>
          <div className  = {'flex justify-center items-center rounded-xl bg-work-label mr-2 w-1/3 p-4'}>
            <P>{task.title}</p>
          
          </div>
        <div className = {'flex justify-center items-center rounded-xl bg-work-label grow'}>
          <p>{task.description}</p>
        </div>
        <div className="grid gap-6 w-3/4">
          {tasks.map((task) => (
            <Card key={task.id} className="bg-white">
              <CardHeader className="flex-row pb-1">
                <Checkbox
                  className="rounded-full mt-1 mr-2"
                  checked={task.isDone}
                  onCheckedChange={() => handleCheckboxChange(task.id)}
                />
                <CardTitle className={task.isDone ? 'line-through' : ''}>
                  {task.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-1">
                <div className="flex items-start space-x-4 rounded-md bg-accent text-accent-foreground transition-all pt-2">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {task.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="w-1/2 flex gap-5 flex-col">
            <Button className="self-start" onClick={toggleFormVisibility}>
              Add task
            </Button>
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
