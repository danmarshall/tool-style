import React, { useState } from 'react';
import { ToolTemplate } from '@danmarshall/tool-style';

function App() {
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
      }}
      sidebar={
        <>
          <section>
            <h2>Input Group 1</h2>
            <label htmlFor="input1">Input 1</label>
            <input type="text" id="input1" name="input1" />
            
            <label htmlFor="input2">Input 2</label>
            <input type="text" id="input2" name="input2" />
          </section>
          
          <section>
            <h2>Input Group 2</h2>
            <label htmlFor="option1">Option 1</label>
            <select id="option1" name="option1">
              <option>Choose...</option>
              <option>Option A</option>
              <option>Option B</option>
              <option>Option C</option>
            </select>
            
            <label htmlFor="slider1">Slider 1</label>
            <input type="range" id="slider1" name="slider1" min="0" max="100" defaultValue="50" />
            
            <label htmlFor="checkbox1">
              <input type="checkbox" id="checkbox1" name="checkbox1" />
              Enable feature
            </label>
          </section>
          
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
    />
  );
}

export default App;
