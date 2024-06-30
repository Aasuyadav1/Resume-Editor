import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import CreateTab from "./CreateTab";
import Template from "./Template";

function Tabes() {
  return (
    <Tabs
      aria-label="Dynamic tabs"
      indicatorColor="success"
      color="success"
      variant="underlined"
      size="lg"
      fullWidth="true"
      classNames={{
        tabList:
          "gap-6  w-full relative rounded-none p-0 border-b border-divider",
        cursor: "w-full bg-indigo-600 ",
        tab: "w-full  px-0 h-12",
        tabContent: "group-data-[selected=true]:text-indigo-600",
      }}
    >
      <Tab key="create" title="Create">
        <CreateTab />
      </Tab>
      <Tab key="template" title="template">
        <Template />
      </Tab>
    </Tabs>
  );
}

export default Tabes;
