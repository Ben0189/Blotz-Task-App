import { TaskTable } from './components/task-table';
import { mocktasks } from './mockdata';

const page = () => {
  return (
    <div>
      <TaskTable tasks = {mocktasks}/>
    </div>
  )
}

export default page
