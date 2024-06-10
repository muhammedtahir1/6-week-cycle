import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const data = [
    {
      question: "What is 6 week cycle?",
      answer:
        "It is a program in which the assigned task/goal is completed under 6 weeks",
    },
    {
      question: "Why should I use, while i can manually manage?",
      answer:
        "It is a program in which the assigned task/goal is completed under 6 weeks",
    },
    {
      question: "How is it going to benefit me?",
      answer:
        "It is a program in which the assigned task/goal is completed under 6 weeks",
    },
    {
      question: "How to get started with it?",
      answer:
        "It is a program in which the assigned task/goal is completed under 6 weeks",
    },
    {
      question: "Is it for students or working professionals?",
      answer:
        "It is a program in which the assigned task/goal is completed under 6 weeks",
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center">  
      <div className="w-1/2 bg-white py-10 px-20 ">
        <h1 className="font-semibold text-3xl text-black pb-10">
          Make completing your important work effortless
        </h1>
        <h2 className="font-bold  text-3xl text-black mb-10">FAQ's</h2>

        {data.map((item)=>{
          return (
            <div className="text-black ">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
          )
        })}

        
      </div>
    </div>
  );
};
export default Faq;
