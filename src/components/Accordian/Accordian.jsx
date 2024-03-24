import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Accordian({accordionKey, title, content}) {
  return (
    <Accordion classNames="w-full bg-transparent shadow-none p-block-10 flex flex-col items-center" selectionMode="single" fullWidth="true" defaultSelectedKeys={["1"]} variant="bordered" key={accordionKey}>
      <AccordionItem classNames="w-full bg-transparent shadow-none "  aria-label={title} title={title}>
        {content}
      </AccordionItem>
    </Accordion> 
  );
}

export default Accordian;
