import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AddTask({ handleAddTask }) {
  return (
    <Link href="/add-task">
      <Button onClick={handleAddTask}>Add Task</Button>
    </Link>
  );
}
