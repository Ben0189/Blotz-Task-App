import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10 mx-24">
        <Input
          className="bg-[#278291] text-center text-primary-light placeholder-primary-light"
          placeholder="Write Your Title Here"
        />

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full grid-cols-4 gap-2 px-2">
            <TabsTrigger
              className="bg-monthly-stats-work-label text-primary-dark"
              value="work"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              className="bg-monthly-stats-personal-label text-primary-dark"
              value="personal"
            >
              Personal
            </TabsTrigger>
            <TabsTrigger
              className="bg-[#278291] text-primary-dark"
              value="acedemic"
            >
              Acedemic
            </TabsTrigger>
            <TabsTrigger
              className="bg-monthly-stats-others-label text-primary-dark"
              value="others"
            >
              Others
            </TabsTrigger>
          </TabsList>
          <TabsContent value="work">
            <div className="p-1">
              <Card>
                <CardContent className="space-y-2 bg-monthly-stats-work-label">
                  <Textarea
                    className="text-primary-dark bg-monthly-stats-work-label border-work-label placeholder:text-center placeholder:leading-[10rem]"
                    rows={10}
                    placeholder="Type your message here."
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="personal">
            <div className="p-1">
              <Card>
                <CardContent className="space-y-2 bg-monthly-stats-personal-label">
                  <Textarea
                    className="text-primary-dark bg-monthly-stats-personal-label border-personal-label placeholder:text-center placeholder:leading-[10rem]"
                    rows={10}
                    placeholder="Type your message here."
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="acedemic">
            <div className="p-1">
              <Card>
                <CardContent className="space-y-2 bg-[#278291]">
                  <Textarea
                    className="text-primary-dark bg-[#278291] border-[#278291] placeholder:text-center placeholder:leading-[10rem]"
                    rows={10}
                    placeholder="Type your message here."
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="others">
            <div className="p-1">
              <Card>
                <CardContent className="space-y-2 bg-monthly-stats-others-label">
                  <Textarea
                    className="text-primary-dark bg-monthly-stats-others-label border-others-label placeholder:text-center placeholder:leading-[10rem]"
                    rows={10}
                    placeholder="Type your message here."
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
