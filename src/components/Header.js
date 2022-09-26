

import React from "react";
import { TabList, Tab } from "@twizzle-library/twizzle-library";

const Header = () => {
  const Tabs = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Experience",
    link: "#experience",
    },
    {
        name: "Projects",
        link: "#projects",
    },
    {
        name: "Contact",
        link: "#contact",
    },
    {
        name: "Resumé",
    }
  ];

  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div className="navigation">
      <TabList
        style={{
          paddingBottom: "10px",
          width: "fit-content",
        }}
      >
        {Tabs.map((tab, index) => (
          <div key={index}>
            <Tab
              key={index}
              isActive={activeTab === index}
              onClick={() => {
                setActiveTab(index);
                //download the resume
                if(tab.name === "Resumé"){
                    window.open(
                        'resume.pdf',
                        "_blank"
                    );
                }
                else {
                    window.location.href = tab.link
                }
            }}
              style={{
                width: "120px",
                color: "white",
              }}
            >
              {tab.name}
            </Tab>
          </div>
        ))}
      </TabList>
    </div>
  );
};
export default Header;
