import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
// import { TaskItemDTO } from '@/model/task-Item-dto';

// interface TaskTableProps {
//   tasks: TaskItemDTO[]; // tasks prop is an array of TaskItemDTO objects
// }

export function TaskTable({ tasks }) {
  console.log('tasks');
  console.log(tasks);
  return (
    <div className="flex flex-col h-fit mt-10">
      {tasks.map((task) => (
        <div key={task.id} className="flex mt-5">
          <Card
            className="w-1/3 mr-3 flex justify-center items-center"
            style={{ backgroundColor: task.label.color }}
          >
            <CardHeader>
              <CardTitle className="text-center bg-task.label.color">
                {task.label?.name || 'No Label'}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card
            className="w-full"
            style={{ backgroundColor: task.label.color }}
          >
            <CardHeader
              className="ml-5 "
              style={{
                backgroundImage:
                  'linear-gradient(to top, transparent 16.66%, gray 16.66%, gray 83.33%, transparent 83.33%)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '4px 100%',
                backgroundPosition: '0 0',
              }}
            >
              <CardTitle>{task.title}</CardTitle>
              <CardDescription>
                {task?.description || 'NO Description'}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
