import { TaskItemDTO } from "@/model/task-Item-dto";
  
  export const mocktasks : TaskItemDTO[] = [
    {
        id: 1,
        title: "Complete project report",
        isDone: false,
        dueDate: new Date()
    },
    {
        id: 2,
        title: "Review pull requests",
        isDone: true,
        dueDate: new Date()
    },
    {
        id: 3,
        title: "Team meeting",
        isDone: false,
        dueDate: new Date()
    },
    {
        id: 4,
        title: "Update documentation",
        isDone: true,
        dueDate: new Date()
    },
    {
        id: 5,
        title: "Code review for module A",
        isDone: false,
        dueDate: new Date()
    },
    {
        id: 6,
        title: "Deploy new version",
        isDone: true,
        dueDate: new Date()
    },
    {
        id: 7,
        title: "Refactor authentication service",
        isDone: false,
        dueDate: new Date()
    },
    {
        id: 9,
        title: 'Complete project report',

        isDone: false,

        dueDate: new Date('2024-10-06'), 
      },
      {
        id: 10,
        title: 'Meeting with the team',
        isDone: false,
        dueDate: new Date('2024-10-06'),  
      },
];