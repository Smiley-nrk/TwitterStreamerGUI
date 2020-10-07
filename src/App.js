import React from 'react';
import './App.css';
import SplitPane,{ Pane } from 'react-split-pane';
import TweetList from './components/tweetList.js';
import RuleManager from './components/ruleManager.js';

function App() {

  return (
    <div>
    <SplitPane split="vertical" minSize="25%" pane1Style={{backgroundColor:"#065c6f"}}
    pane2Style={{backgroundColor:"#faf3dd"}}>
      <RuleManager />
      <div style={{height:"100%",overflowY:"scroll"}}>
        <TweetList/>
      </div>
     </SplitPane>
    </div>
  );
}

export default App;
