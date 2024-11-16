import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10 mx-24">
        <Input type="email" placeholder="Write Your Title Here" />

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger className="bg-secondary text-white" value="account">Work</TabsTrigger>
            <TabsTrigger value="password">Personal</TabsTrigger>
            <TabsTrigger value="acedemic">Acedemic</TabsTrigger>
            <TabsTrigger value="others">Others</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardContent className="space-y-2 bg-secondary">
                <div className="p-1">
                  <Textarea 
                    className="text-secondary bg-[#9BE3E1] border-[#9BE3E1] placeholder:text-center placeholder:leading-[10rem]" 
                    placeholder="Type your description here." 
                    rows={10}/>
                </div>
               </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardContent className="space-y-2">
                <p>Personal</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="acedemic">
            <Card>
              <CardContent className="space-y-2">
                <p>Acedemic</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="others">
            <Card>
              <CardContent className="space-y-2">
                <p>Others</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
    </>
  );  
}
