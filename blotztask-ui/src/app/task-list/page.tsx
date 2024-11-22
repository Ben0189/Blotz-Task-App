'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AddTask } from './components/add-button';
import { TaskTable } from './components/task-table';
import { TaskItemDTO } from '@/model/task-Item-dto';
import { fetchAllTaskItems } from '@/services/taskService';
import { Checkbox } from '@/components/ui/checkbox';

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

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (checked: boolean) => {
      setIsChecked(checked); 
  };
   

    return (
        <div className="flex flex-col mt-10 mr-10">

          <div className="flex justify-end">
            <AddTask handleAddTask={handleAddTask}/>
          </div>
          
          
          <div className="flex flex-row justify-start space-x-4">
            <Checkbox
                checked={isChecked} 
                onCheckedChange={handleCheckboxChange} 
                className="h-8 w-8 rounded-md"
                style={{
                  backgroundColor: isChecked ? '#343236' : '#838087', 
                  color: isChecked ? 'white' : 'transparent',
                  position: 'relative',
                  borderColor:'transparent'
              }}
            />
            <TaskTable tasks={taskList} />
          </div>
          
    
          <div className="flex justify-end mt-10">
            <Button asChild className="ml-auto">
              <Link href="/">Return Home Page</Link>
            </Button>
          </div>
        </div>
      );
}