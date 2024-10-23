'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AddTask } from './components/add-button';
import { TaskTable } from './components/task-table';
import { TaskItemDTO } from '@/model/task-Item-dto';
import { fetchAllTaskItems } from '@/services/taskService';

export default function Page() {
    const [taskList, setTaskList] = useState<TaskItemDTO[]>([]);

    //Not implemented yet
    async function handleAddTask() {
    }

    const loadTasks = async () => {
        const data = await fetchAllTaskItems();
        setTaskList(data);
    }

    /**
     * Fetch the tasks once and set the hook on the first rendering
     */
    useEffect(() => {
        loadTasks();
    }, []); // Runs on the first render using [] parameter and rerun when state changes, e.g add task

    return (
        <div className="flex flex-col items-end mt-10 mr-10">
          <AddTask handleAddTask={handleAddTask}/>
    
          <TaskTable tasks={taskList} />
    
          <div className="mt-10">
            <Button asChild className="ml-auto">
              <Link href="/">Return Home Page</Link>
            </Button>
          </div>
        </div>
      );
}