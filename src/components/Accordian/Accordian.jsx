import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Accordian({accordionKey, title, content}) {
  return (
    <Accordion classNames="w-full bg-transparent shadow-none " selectionMode="single" fullWidth="true" defaultSelectedKeys={["1"]} variant="bordered" key={accordionKey}>
      <AccordionItem classNames="w-full bg-transparent shadow-none "  aria-label={title} title={title}>
        {content}
      </AccordionItem>
    </Accordion> 
  );
}

export default Accordian;
