import React from 'react';
import './styles.css';
import Header from './components/Header';

function App() {
  return (
    <div style={appStyle}>
      <Header />
    </div>
  );
}

const appStyle = {
  color: 'white'
}

export default App;
