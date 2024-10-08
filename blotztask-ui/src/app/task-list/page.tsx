import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AddTask } from './components/add-button';
import { TaskTable } from './components/task-table';
import { mocktasks } from './mockdata';

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-end mt-10 mr-10">
        <AddTask />

        <TaskTable tasks={mocktasks} />

        <div className="mt-10">
          <Button asChild className="ml-auto">
            <Link href="/">Return Home Page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
