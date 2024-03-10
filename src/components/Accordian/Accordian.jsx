import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

function Accordian({key, title, content}) {
  return (
    <Accordion variant="splitted">
      <AccordionItem key={key} aria-label={title} title={title}>
        {content}
      </AccordionItem>
    </Accordion>
  );
}

export default Accordian;
