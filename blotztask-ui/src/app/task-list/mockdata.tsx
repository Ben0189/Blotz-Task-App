import { TaskItemDTO } from "@/model/task-Item-dto";
  
  export const mocktasks : TaskItemDTO[] = [
    {
        id: 1,
        title: "Complete project report",
        isDone: false,
        dueDate: ""
    },
    {
        id: 2,
        title: "Review pull requests",
        isDone: true,
        dueDate: ""
    },
    {
        id: 3,
        title: "Team meeting",
        isDone: false,
        dueDate: ""
    },
    {
        id: 4,
        title: "Update documentation",
        isDone: true,
        dueDate: ""
    },
    {
        id: 5,
        title: "Code review for module A",
        isDone: false,
        dueDate: ""
    },
    {
        id: 6,
        title: "Deploy new version",
        isDone: true,
        dueDate: ""
    },
    {
        id: 7,
        title: "Refactor authentication service",
        isDone: false,
        dueDate: ""
    },
    {
        id: 9,
        title: 'Complete project report',

        isDone: false,

        dueDate: '2024-10-06',  // 设置 dueDate 为今天
      },
      {
        id: 10,
        title: 'Meeting with the team',
        isDone: false,
        dueDate: '2024-10-06',  // 设置 dueDate 为明天
      },
];