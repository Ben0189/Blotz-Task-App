import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { promises as fs } from 'fs';
import { Metadata } from 'next';
import path from 'path';
import { z } from 'zod';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';
import { taskSchema } from './data/schema';

export const metadata: Metadata = {
  title: 'Tasks',
  description: 'A task and issue tracker build using Tanstack Table.',
};

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'src/app/tasks/data/tasks.json')
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
  const tasks = await getTasks();

  return (
    <>
      {/* We dont need this currently, it is for navigation bar for medium screensize */}
      {/* <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div> */}
      <Card className="mb-4 bg-yellow-50">
        <CardHeader>
          <CardTitle className="text-yellow-600">
            <span className="info-icon">ℹ️</span>Notice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-yellow-500">
            This page is a newer version of the Task List page with more
            features. Currently still under implementation.
          </CardDescription>
        </CardContent>
      </Card>
      {/* <p>This page is newer version of Task List page with more feature. Currently still under implementation</p> */}
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex bg-white border-1 shadow-lg	">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Task List</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">{/* <UserNav /> */}</div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
