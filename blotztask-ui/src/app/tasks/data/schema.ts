import { z } from 'zod';

//TODO : This will be remove once backend is ready, this schema is not what we want for our application
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
