import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Accordian({accordionKey, title, content}) {
  return (
    <Accordion variant="splitted" key={accordionKey}>
      <AccordionItem  aria-label={title} title={title}>
        {content}
      </AccordionItem>
    </Accordion>
  );
}

export default Accordian;
