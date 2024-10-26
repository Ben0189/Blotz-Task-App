import { Button } from '@/components/ui/button';

export function AddTask({handleAddTask}) {
  return (
    <Button onClick={handleAddTask}>
      Add Task
    </Button>
  );
}
