'use client';

import { Button } from '@/components/ui/button';
import { H1, H3 } from '@/components/ui/heading-with-anchor';
import { TaskItemDTO } from '@/model/taskItem';
import { fetchTaskItems } from '@/services/todoService';
import Link from 'next/link';
import { useState } from 'react';
import TaskList from './components/task-list';

export default function Home() {
  const [tasks, setTasks] = useState<TaskItemDTO[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchTaskItems();
      setTasks(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-28">
      <H1>⚒️ Test Backend Connection</H1>
      <H3 className="text-lg font-light text-muted-foreground sm:text-xl">
        Click the button to fetch the current list of todo items.
      </H3>
      <div className="mt-16 flex flex-col gap-3 md:flex-row">
        <Button onClick={loadTasks} disabled={loading}>
          {loading ? 'Loading...' : 'Fetch Todos'}
        </Button>
        <Link href="/">
          <Button asChild>
            <span>Return Home Page</span>
          </Button>
        </Link>
      </div>
      {error && (
        <p className="mt-8 text-red-500">Error fetching todos: {error}</p>
      )}
      {tasks.length > 0 && (
        <TaskList tasks={tasks}/>
      )}
    </main>
  );
}
