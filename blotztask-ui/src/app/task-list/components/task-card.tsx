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

export function TaskCard({ tasks }) {
  return (
    <div className="flex flex-col h-fit mt-10">
      {tasks.map((task) => (
        <div key={task.id} className="flex mt-5">
          <Card
            className="w-1/3 mr-3 flex justify-center items-center"
            style={{ backgroundColor: task.label.color }}
          >
            <CardHeader>
              <CardTitle className="text-center">
                {task.label?.name || 'No Label'}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card
            className="w-full"
            style={{ backgroundColor: task.label.color }}
          >
            <CardHeader className="flex-row ml-5 ">
              <div>
                <Separator className="bg-gray-500" orientation="vertical" />
              </div>
              <div className="flex flex-col space-y-1.5 p-4">
                <CardTitle>{task.title}</CardTitle>
                <CardDescription>
                  {task?.description || 'NO Description'}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}
