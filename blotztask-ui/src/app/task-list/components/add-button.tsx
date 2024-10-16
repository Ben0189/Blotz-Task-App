import { Button } from '@/components/ui/button';

export function AddTask({update}) {
  return (
    <Button onClick={update}>
      Add Task
    </Button>
  );
}
