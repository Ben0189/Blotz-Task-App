import { Input } from '@/components/ui/input';

export default function AddTask() {
  return (
    <div>
      <Input
        placeholder="Write Your Title Here"
        className="bg-secondary text-center mb-4
                   placeholder:text-white     
                   text-white"
      />
    </div>
  );
}
