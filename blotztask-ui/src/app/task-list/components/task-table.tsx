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

  
  export function TaskTable() {
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
  