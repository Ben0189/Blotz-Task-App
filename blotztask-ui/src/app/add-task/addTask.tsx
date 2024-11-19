import { Input } from '@/components/ui/input';

export default function AddTask() {
  return (
    <div>
      <Input
        placeholder="Write Your Title Here"
        className="bg-secondary m-4 text-center 
                   placeholder:text-white     
                   text-white"
      />
    </div>
  );
}
