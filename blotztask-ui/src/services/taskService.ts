import { TaskItemDTO } from "@/model/task-Item-dto";
import { fetchWithAuth } from "@/utils/fetch-with-auth";

export const fetchAllTaskItems = async (): Promise<TaskItemDTO[]> => {
  const result = await fetchWithAuth<TaskItemDTO[]>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL_WITH_API}/Task/alltask`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return result;
};