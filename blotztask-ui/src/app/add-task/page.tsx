'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import * as React from 'react';
import { DatePickerWithRange } from './component/calendar';

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-10 mx-24">
        <Input
          className="bg-add-task-title-bg text-center text-add-task-title-text placeholder-add-task-title-placeholder"
          placeholder="Write Your Title Here"
        />

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full grid-cols-4 gap-2 px-2">
            <TabsTrigger
              className="bg-add-task-work-label-bg text-add-task-work-label-text"
              value="work"
            >
              Work
            </TabsTrigger>
            <TabsTrigger
              className="bg-add-task-personal-label-bg text-add-task-personal-label-text"
              value="personal"
            >
              Personal
            </TabsTrigger>
            <TabsTrigger
              className="bg-add-task-academic-label-bg text-add-task-academic-label-text"
              value="acedemic"
            >
              Acedemic
            </TabsTrigger>
            <TabsTrigger
              className="bg-add-task-others-label-bg text-add-task-others-label-text"
              value="others"
            >
              Others
            </TabsTrigger>
          </TabsList>
          <TabsContent value="work">
            <div className="p-1">
              <Card>
                <CardContent className="space-y-2 bg-add-task-work-label-bg">
                  <Textarea
                    className="text-primary-dark bg-add-task-work-input-area-bg border-add-task-work-label-bg placeholder:text-center placeholder:leading-[10rem] placeholder-add-task-work-label-text"
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
                <CardContent className="space-y-2 bg-add-task-personal-label-bg">
                  <Textarea
                    className="text-primary-dark bg-add-task-personal-input-area-bg border-add-task-personal-label-bg placeholder:text-center placeholder:leading-[10rem]  placeholder-add-task-personal-label-text"
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
                <CardContent className="space-y-2 bg-add-task-academic-label-bg">
                  <Textarea
                    className="text-primary-dark bg-add-task-academic-input-area-bg border-add-task-academic-label-bg placeholder:text-center placeholder:leading-[10rem] placeholder-add-task-academic-label-bg"
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
                <CardContent className="space-y-2 bg-add-task-others-label-bg">
                  <Textarea
                    className="text-primary-dark bg-add-task-others-input-area-bg border-add-task-others-label-bg placeholder:text-center placeholder:leading-[10rem] placeholder-add-task-others-label-text"
                    rows={10}
                    placeholder="Type your message here."
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        <div className="flex justify-between items-center w-full">
          <DatePickerWithRange />
          <Button>Add task</Button>
        </div>
      </div>
    </>
  );
}
