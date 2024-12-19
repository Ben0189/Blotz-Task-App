'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import { TaskItemDTO } from '@/model/task-Item-dto';
// import { fetchAllTaskItems } from '@/services/taskService';
import { Trash } from 'lucide-react';
import { DeleteDialog } from './components/delete-confirmation-dialog';



export default function Page() {
  // const [taskList, setTaskList] = useState<TaskItemDTO[]>([]);
  // const [isDialogOpen, setDialogOpen] = useState(false);
  const [isDeleteVisible, setDeleteVisible] = useState(false); // State to toggle visibility

  const loadTasks = async () => {
    // const data = await fetchAllTaskItems();
    // setTaskList(data);
  };

  const toggleDeleteButton = () => {
    setDeleteVisible((prev) => !prev); // Toggle the visibility of delete button
  };

  /**
   * Fetch the tasks once and set the hook on the first rendering
   */
  useEffect(() => {
    loadTasks();
  }, []); // Runs on the first render using [] parameter and rerun when state changes, e.g add task

    return (
        <div className="flex flex-col items-end mt-5">

          <div className="flex w-full justify-between">
            <p className=" text-5xl font-bold">All Task</p>
            <div className="flex items-center gap-3">
              <Link href="/add-task">
                <Button className="bg-all-task-add-button-bg text-all-task-add-button-text border-2 border-all-task-add-button-border">
                  <span className="">+ </span>Add Task
                </Button>
              </Link>

              {/* <Button
                variant="outline"
                className="bg-all-task-delete-button-bg text-white border-2"
                onClick={() => setDialogOpen(true)}
              >
                <Trash />
              </Button> */}

              {!isDeleteVisible ? (
                // Trash Icon Button (Visible when delete button is not visible)
                <Button
                  variant="outline"
                  className="bg-all-task-delete-button-bg text-white border-2"
                  onClick={toggleDeleteButton}
                >
                  <Trash />
                </Button>
              ) : (
                // "Delete Task" Button (Visible when trash icon is clicked)
                <Button
                  className="bg-all-task-delete-button-bg text-white border-2"
                  onClick={toggleDeleteButton}
                >
                  Delete Task
                </Button>
              )}
            </div>
          </div>
      
        </div>
      );
}
