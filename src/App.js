import React from 'react';
import './styles.css';
import Header from './components/Header';
import TechnologyList from './components/TechnologyList';

function App() {
  return (
    <div style={appStyle}>
      <Header />
      <TechnologyList />
    </div>
  );
}

const appStyle = {
  color: 'white'
}

export default App;
