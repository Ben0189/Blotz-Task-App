'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AddTask } from './components/add-button';
import { TaskTable } from './components/task-table';
import { TaskItemDTO } from '@/model/task-Item-dto';
import { fetchAllTaskItems } from '@/services/taskService';
import { Trash } from 'lucide-react';

export default function Page() {
  const [taskList, setTaskList] = useState<TaskItemDTO[]>([]);

  const loadTasks = async () => {
    const data = await fetchAllTaskItems();
    setTaskList(data);
  };

  /**
   * Fetch the tasks once and set the hook on the first rendering
   */
  useEffect(() => {
    loadTasks();
  }, []); // Runs on the first render using [] parameter and rerun when state changes, e.g add task

  return (
    <div className="flex  mt-10 mr-10 w-full justify-between">
      <div>
        <p className=" text-5xl font-bold">All Task</p>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/add-task">
          <Button className="bg-all-task-add-button-bg text-all-task-add-button-text border-2 border-all-task-add-button-border">
            <span className="">+ </span>Add Task
          </Button>
        </Link>

        <Button
          variant="outline"
          className="bg-all-task-delete-button-bg text-white border-2"
        >
          <Trash />
        </Button>
      </div>
    </div>
  );
}
