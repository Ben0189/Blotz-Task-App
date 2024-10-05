'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { taskDto } from './models/taskDto';
import { TaskDTO, taskDTOSchema } from './schema/schema';
import { TaskForm } from './components/form';
import React from 'react';

// 获取当前日期的字符串形式，格式为 YYYY-MM-DD
const getTodayDateString = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];  // 格式化为 'YYYY-MM-DD'
};

// Define mock data
const mockTasks: taskDto[] = [
  {
    id: 1,
    title: 'Complete project report',
    description: 'Finalize the project report and submit it to the manager.',
    isDone: false,
    createdAt: '2024-07-20T08:30:00Z',
    updatedAt: '2024-07-20T08:30:00Z',
    dueDate: '2024-10-05',  // 设置为今天
  },
  {
    id: 2,
    title: 'Meeting with the team',
    description: 'Discuss the project milestones and deadlines with the team.',
    isDone: false,
    createdAt: '2024-07-21T10:00:00Z',
    updatedAt: '2024-07-21T10:00:00Z',
    dueDate: '2024-10-06',  // 未来日期
  },
  {
    id: 3,
    title: 'Prepare presentation slides',
    description: 'Work on the slides for the upcoming presentation.',
    isDone: false,
    createdAt: '2024-07-15T08:30:00Z',
    updatedAt: '2024-07-15T08:30:00Z',
    dueDate: '2024-09-30',  // 过去的日期
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

  // Filter tasks: show tasks with dueDate today or in the future
  const todayDate = getTodayDateString();
  const todayAndFutureTasks = tasks.filter((task) => task.dueDate >= todayDate);

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
            Here&apos;s a list of your tasks for today and the future
          </p>
        </div>
        <div className="grid gap-6 w-3/4">
          {todayAndFutureTasks.length > 0 ? (
            todayAndFutureTasks.map((task) => (
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
            <p className="text-muted-foreground">No tasks due today or in the future.</p>
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
