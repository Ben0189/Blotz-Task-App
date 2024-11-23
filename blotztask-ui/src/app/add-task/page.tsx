import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

export default function Home() {
  return (
    <>
      <div>
        <Input
          placeholder="Write Your Title Here"
          className="bg-secondary text-center mb-4
                   placeholder:text-white     
                   text-white"
        />
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
