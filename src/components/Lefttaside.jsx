import React from 'react'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

function Leftaside() {
  
    
      return (
        <div className="flex w-[300px] flex-col bg-white fixed h-screen left-0 top-16 ">
         
        
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
                    create
                  </CardBody>
                </Card>  
              </Tab>
              <Tab key="template" title="template">
                <Card>
                  <CardBody>
                    template
                  </CardBody>
                </Card>  
              </Tab>
            
          </Tabs>
    
        </div>  
      );
    }
    

export default Leftaside