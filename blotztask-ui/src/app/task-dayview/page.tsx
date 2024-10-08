'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { taskDto } from './models/taskDto';
import { TaskDTO, taskDTOSchema } from './schema/schema';
import { Button } from '@/components/ui/button';
import { TaskForm } from './components/form';

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
      <div>
        <h2 className="text-2xl font-bold">Day View</h2>
        <p className="text-muted-foreground">
          Here&apos;s a list of your tasks for today
        </p>
      </div>
      <div className="grid gap-6 w-3/4">
        {tasks.map((task) => (
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
        ))}

        <div className="w-1/2">
          <Button onClick={toggleFormVisibility}>Add task</Button>
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
    </>
  );
}
