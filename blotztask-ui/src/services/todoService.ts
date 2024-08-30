import { TaskItemDTO } from "@/model/task-Item-dto";

export const fetchAllTaskItems = async () : Promise<TaskItemDTO[]> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/Task/alltask`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data : TaskItemDTO[] = await response.json();
    return data;
  };
  