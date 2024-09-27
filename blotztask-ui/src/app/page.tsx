"use client"
import { H1, H3 } from '@/components/ui/heading-with-anchor';

export default function Home() {
  return (
    
    <main className="flex flex-col gap-5 p-12 md:items-center md:p-28">
      <H1 className='green_gradient'>Blotz 
        <span className='blue_gradient text-center'>
            Task
        </span>
      </H1>

      <H3 className="text-lg font-light text-muted-foreground sm:text-xl">
        Designed to help users efficiently organize and track their tasks
        providing functionality for task creation, management, and completion
        tracking.
      </H3>
    </main>
  );
}
