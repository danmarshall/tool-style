import React, { useState } from 'react';
import {
  ToolTemplate,
  AccordionSection,
  SidebarSection,
  Tabs,
  ButtonGroup,
} from '../src/index';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ToolTemplate
      headerProps={{
        title: "Tool Name",
        backgroundImage: "/tiler-pattern-1768110249839.svg",
        backgroundImageStyle: {
          backgroundSize: '750px',
          backgroundPosition: '0px -22px',
          opacity: 0.3,
        },
        toolsMenu: {
          label: "Other Tools",
          items: [
            { label: "Tool 1", url: "/tool1.html" },
            { label: "Tool 2", url: "/tool2.html" },
            { label: "Tool 3", url: "/tool3.html" },
            { label: "Tool 4", url: "/tool4.html" },
          ]
        }
      }}
      sidebar={
        <>
          <AccordionSection title="Collapsible Group" defaultOpen={false}>
            <label htmlFor="accordionInput1">Hidden Input 1</label>
            <input type="text" id="accordionInput1" name="accordionInput1" />
            
            <label htmlFor="accordionInput2">Hidden Input 2</label>
            <input type="text" id="accordionInput2" name="accordionInput2" />
          </AccordionSection>
          
          <SidebarSection title="Tabs Example">
            <Tabs
              tabs={["Tab 1", "Tab 2", "Tab 3"]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </SidebarSection>
          
          <SidebarSection title="Input Group 1">
            <label htmlFor="input1">Input 1</label>
            <input type="text" id="input1" name="input1" />
            
            <label htmlFor="input2">Input 2</label>
            <input type="text" id="input2" name="input2" />
            
            <label>Alignment</label>
            <ButtonGroup>
              <button type="button">◀</button>
              <button type="button">▬</button>
              <button type="button">▶</button>
            </ButtonGroup>
          </SidebarSection>
          
          <SidebarSection title="Input Group 2">
            <label htmlFor="option1">Option 1</label>
            <select id="option1" name="option1">
              <option>Choose...</option>
              <option>Option A</option>
              <option>Option B</option>
              <option>Option C</option>
            </select>
            
            <label htmlFor="slider1">Slider 1</label>
            <input type="range" id="slider1" name="slider1" min="0" max="100" defaultValue="50" />
            
            <label htmlFor="slider2">Slider 2</label>
            <input type="range" id="slider2" name="slider2" min="0" max="10" step="0.1" defaultValue="5" />
            
            <label htmlFor="checkbox1">
              <input type="checkbox" id="checkbox1" name="checkbox1" />
              Enable feature
            </label>
          </SidebarSection>
          
          <button type="button">Run Tool</button>
        </>
      }
      main={
        <>
          <section style={{ minHeight: '400px' }}>
            <h2>Output</h2>
            <p>Tool output goes here</p>
          </section>
          <section>
            <button type="button">Action Button 1</button>
            <button type="button">Action Button 2</button>
          </section>
        </>
      }
      footer={
        <>
          &copy; 2026 Tool Name | <a href="/privacy">Privacy</a> | <a href="/terms">Terms</a>
        </>
      }
      adsRight={
        <div style={{ width: '160px', height: '600px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#999' }}>
          Ad Space
        </div>
      }
      tabletBottomAd={
        <div style={{ width: '728px', height: '90px', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#999', margin: '0 auto' }}>
          Ad Space
        </div>
      }
    />
  );
}

export default App;
