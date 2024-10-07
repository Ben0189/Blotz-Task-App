'use client';

import { z } from 'zod';

export const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required',
  }),
  description: z.string(),
});

// this is the schema we want for our application
export const taskDTOSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string().optional(),  
  isDone: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  dueDate: z.date(),
});

export type TaskDTO = z.infer<typeof taskDTOSchema>;
