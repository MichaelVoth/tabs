import React, { useState } from 'react';
import './App.css';
import Tab from './components/tab';
import TabMaker from './components/tabMaker';
import TabContent from './components/tabContent';


function App() {
  const [tabs, setTabs] = useState([]);
  const [content, setContent] = useState("");

  const TabPasser = (newTab) => {
    setTabs([...tabs, newTab]);
    console.log("New Tab: ", newTab);
  }
  const clickedTab = (tab) => {
    setContent(tab);
    console.log("Content: ", content);
  }

  return (
    <div className="App">
      <TabMaker
        addTab={TabPasser}

      />
      <Tab
        tabs={tabs}
        tabContent={clickedTab}
      />
      < TabContent
        content={content}
      />
    </div>
  );
}

export default App;
