'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { taskDto } from './models/taskDto';
import { TaskDTO, taskDTOSchema } from './schema/schema';
import { TaskForm } from './components/form';
import React from 'react';

const getTodayDate = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};
// Update
// Define mock data
const mockTasks: taskDto[] = [
  {
    id: 1,
    title: 'Complete project report',
    description: 'Finalize the project report and submit it to the manager.',
    isDone: false,
    createdAt: new Date(),  
    updatedAt: new Date(),  
    dueDate: getTodayDate(),   
  },
  {
    id: 2,
    title: 'Review pull requests',
    description: 'Review the open pull requests from the team.', 
    isDone: true,
    createdAt: new Date(), 
    updatedAt: new Date(), 
    dueDate: new Date('2024-10-09'),   
  },
];

const validatedTasks = z.array(taskDTOSchema).parse(mockTasks);

// Simulate a database read for tasks.
export default function Dayview() {
  const [tasks, setTasks] = useState<TaskDTO[]>(validatedTasks);

  const handleCheckboxChange = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => {
        if (t.id === taskId) {
          return { ...t, isDone: !t.isDone };
        }
        return t;
      })
    );
  };

  // Filter tasks: only show tasks with dueDate as today
  const todayDate = getTodayDate();
  const todayTasks = tasks.filter(
    (task) => task.dueDate.toDateString() === todayDate.toDateString()
  );

  useEffect(() => {
    // Simulate fetching tasks
    setTasks(validatedTasks);
  }, []);

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 md:flex bg-white border-1">
      <div className="items-center space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Day View</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for today
          </p>
        </div>
        <div className="grid gap-6 w-3/4">
          {todayTasks.length > 0 ? (
            todayTasks.map((task) => (
              <Card key={task.id}>
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
            ))
          ) : (
            <p className="text-muted-foreground">No tasks due today.</p>
          )}
          <div className="w-1/2">
            <Card>
              <CardHeader className="pb-1"></CardHeader>
              <CardContent className="grid gap-1">
                <TaskForm setTasks={setTasks} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
