import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"


const page = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-5xl" >Get started</h1>
      <div className="flex flex-col gap-6">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="text">1. What do you name this cycle?</Label>
          <Input type="text" id="text" placeholder="Enter cycle name" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">2. Whats the purpose of  this cycle?</Label>
          <Textarea placeholder="Type your message here." />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">3. What  are the goals of this cycle?</Label>
          <Textarea placeholder="Type your message here." />
        </div>
        <Button variant={"default"}>Create cycle</Button>
      </div>
    </div>
  );
};

export default page;
