import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Faq = () => {
    return (
       
      <div className=' flex flex-col justify-center items-center bg-white py-20 px-20 '>
        <h1 className='font-semibold text-3xl text-black  px-20 py-10'>
            Make completing your important work effortless</h1>
            <h2 className='font-bold  text-3xl text-black '>
                FAQ's
            </h2>

        

        <div className='text-black'>
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

        </div>
       
          
      </div>
    )
  }
  export default Faq