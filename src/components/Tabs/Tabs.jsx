import React from 'react'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import CreateTab from '../CreateTab';

function Tabes() {
  return (
    <Tabs aria-label="Dynamic tabs" indicatorColor="success"   color="success" 
    variant="underlined"  size="lg" fullWidth="true"  classNames={{
        tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
        cursor: "w-full bg-[#22d3ee]",
        tab: "w-full px-0 h-12",
        tabContent: "group-data-[selected=true]:text-[#06b6d4]"
      }}>
        
          <Tab key="create" title="Create">
            <Card>
              <CardBody>
                <CreateTab/>
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="template" title="template">
            <Card>
              <CardBody>
                template 
                {/* here html file render jo display karvana hai template mein */}
              </CardBody>
            </Card>  
          
          </Tab>
        
      </Tabs>
  )
}

export default Tabes