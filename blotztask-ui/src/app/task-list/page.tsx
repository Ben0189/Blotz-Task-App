import { TaskTable } from './components/task-table';

import { TaskItemDTO } from "@/model/task-Item-dto";
  
  const tasks : TaskItemDTO[] = [
    {
        id: 1,
        title: "Complete project report",
        isDone: false,
    },
    {
        id: 2,
        title: "Review pull requests",
        isDone: true,
    },
    {
        id: 3,
        title: "Team meeting",
        isDone: false,
    },
    {
        id: 4,
        title: "Update documentation",
        isDone: true,
    },
    {
        id: 5,
        title: "Code review for module A",
        isDone: false,
    },
    {
        id: 6,
        title: "Deploy new version",
        isDone: true,
    },
    {
        id: 7,
        title: "Refactor authentication service",
        isDone: false,
    },
];


const page = () => {
  return (
    <div>
      <TaskTable tasks = {tasks}/>
    </div>
  )
}

export default page
