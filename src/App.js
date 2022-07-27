import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <>
        <Header className="bg-black" />
        <SolarSystem className="bg-black" />
        <Missions className="bg-black" />
      </>
    );
  }
}

export default App;
