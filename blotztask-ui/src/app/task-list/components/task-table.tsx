import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { TaskItemDTO } from "@/model/task-Item-dto";

interface TaskTableProps {
  tasks: TaskItemDTO[]; // tasks prop is an array of TaskItemDTO objects
}
  
export function TaskTable({ tasks }: TaskTableProps) {
    return (
      <Table>
        <TableCaption>A list of your recent Tasks.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Task-id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Isdone</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell className="font-medium">{task.id}</TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell className="text-right"> {task.isDone ? "Yes" : "No"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  