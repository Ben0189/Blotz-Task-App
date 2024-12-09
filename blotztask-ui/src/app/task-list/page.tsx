'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Trash } from 'lucide-react';

export default function Page() {
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
