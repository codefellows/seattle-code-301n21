import './App.css';
import React from 'react';

import CoolNumber from './CoolNumber.js';
import Header from './Header.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <CoolNumber number="42" description="42 is the answer to the question of life, the universe, and everything." />
        <CoolNumber number="43" description="43 is one more than 42." />
      </div>
      );
  }
}


// deleted:
// logo.svg
// setupTests.js
// reportWebVitals.js
// from index.js, the import reportWebVitals and the last line
// most of the code in App.js
export default App;
