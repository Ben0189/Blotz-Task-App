import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AddTask } from './components/add-button';
import { TaskTable } from './components/task-table';
import { mocktasks } from './mockdata';

const page = () => {
  return (
    <div>
      <div className="flex justify-end items-center mt-10 mr-10"><AddTask /></div>
      <TaskTable tasks = {mocktasks}/>
      <div className="mt-10 flex flex-col gap-3 md:flex-row">
        <Button asChild className="ml-auto mr-16">
          <Link href="/">Return Home Page</Link>
        </Button>
      </div>
    </div>
    
  )
}

export default page
