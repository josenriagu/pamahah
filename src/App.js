import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='/pamahah.jpg' className="App-logo" alt="logo" />
        <p>
          Let's make Pamahah Reactive <span role="img" aria-label="raised hands">🙌🏽</span>
        </p>
        <a
          className="App-link"
          href="https://wa.me/2348034474677?text=I%20support%20the%20movement%20with%20the%20sum%20of%20₦1000000"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to Support
        </a>
      </header>
    </div>
  );
}

export default App;
