import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import AddTask from './addTask';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10 mx-24">
        <Input type="email" placeholder="Write Your Title Here" />
      </div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-4 gap-2 px-2">
          <TabsTrigger className="bg-secondary text-white" value="work">
            Work
          </TabsTrigger>
          <TabsTrigger className="bg-secondary text-white" value="personal">
            Personal
          </TabsTrigger>
          <TabsTrigger className="bg-secondary text-white" value="acedemic">
            Acedemic
          </TabsTrigger>
          <TabsTrigger className="bg-secondary text-white" value="others">
            Others
          </TabsTrigger>
        </TabsList>
        <TabsContent value="work">
          <div className="p-1">
            <Card>
              <CardContent className="space-y-2 bg-secondary">
                <Textarea
                  className="text-secondary bg-[#9BE3E1] border-[#9BE3E1] placeholder:text-center placeholder:leading-[10rem]"
                  rows={10}
                  placeholder="Type your message here."
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="personal">
          <Textarea placeholder="Type your message here." />
        </TabsContent>
        <TabsContent value="acedemic">
          <Textarea placeholder="Type your message here." />
        </TabsContent>
        <TabsContent value="others">
          <Textarea placeholder="Type your message here." />
        </TabsContent>
      </Tabs>
    </>
  );
}
