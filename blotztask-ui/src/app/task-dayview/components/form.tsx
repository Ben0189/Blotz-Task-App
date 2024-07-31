"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { de } from "@faker-js/faker"

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  description: z.string() 
})

export function ProfileForm({ setTasks }) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: 122, // Just random id for now
        title: values.title,
        description: values.description || "",
        isDone: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="font-semibold" placeholder="Title" {...field} />
              </FormControl>
              <FormMessage className="text-red-600"/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add</Button>
      </form>
    </Form>
  )
}
