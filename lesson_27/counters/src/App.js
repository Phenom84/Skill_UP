import React from 'react';
import Counters from './Components/Counters'
import Header from './Components/Header'

function App() {
  return (
    <div className='app'>
      <Header lesson='lesson 27'/>
      <div className='content'>
        <Counters initialCount = {1} initialStep={5}/>
        <Counters initialCount = {2} initialStep={4}/>
        <Counters initialCount = {3} initialStep={3}/>
        <Counters initialCount = {4} initialStep={2}/>
        <Counters initialCount = {5} initialStep={1}/>
      </div>
    </div>
  );
}

export default App;
