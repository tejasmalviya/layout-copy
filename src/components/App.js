import React from 'react';
import './css/App.css';
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

function App() {
  return (
    <div className="App container-fluid">
      <TopSection/>
      <BottomSection/>
    </div>
  );
}

export default App;
