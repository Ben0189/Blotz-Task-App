import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TaskTable } from './components/task-table';
import { mocktasks } from './mockdata';

const page = () => {
  return (
    <div>
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
