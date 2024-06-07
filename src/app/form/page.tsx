import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Get started</h1>
      <div>
        <div className="grid w-full max-w-sm items-center gap-1.5 ">
          <Label htmlFor="email">1. What do you name this cycle?</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">2. Whats the purpose of  this cycle?</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">3. What  are the goals of this cycle?</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <Button variant={"default"}>Create cycle</Button>
      </div>
    </div>
  );
};

export default page;
