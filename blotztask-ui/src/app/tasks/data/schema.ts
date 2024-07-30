import { z } from "zod"

//TODO : This will be remove once backend is ready, this schema is not what we want for our application
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})

export type Task = z.infer<typeof taskSchema>

// this is the schema we want for our application
export const taskDTOSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  isDone: z.boolean(),
  createdAt: z.string().transform((str) => new Date(str)), // Convert string to Date
  updatedAt: z.string().transform((str) => new Date(str)), // Convert string to Date
});

export type TaskDTO = z.infer<typeof taskDTOSchema>;