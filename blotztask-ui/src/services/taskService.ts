import { TaskDTO } from "@/app/task-dayview/schema/schema";
import { TaskItemDTO } from "@/model/task-Item-dto";
import { fetchWithAuth } from "@/utils/fetch-with-auth";

export const fetchAllTaskItems = async (): Promise<TaskItemDTO[]> => {
  const response = await fetchWithAuth(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_WITH_API}/Task/alltask`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: TaskItemDTO[] = await response.json();
  return data;
};

export const fetchTaskItemsDueToday = async (): Promise<TaskDTO[]> => {
    //Converting today's date to ISO String format
    const date = new Date().toISOString().split('T')[0];

    const response = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_API_BASE_URL_WITH_API}/Task/due-date/${date}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  
    if (!response.ok) {
      throw new Error('Error in fetching Task Item from backend');
    }
  
    const data: TaskDTO[] = await response.json();
    return data;
  };