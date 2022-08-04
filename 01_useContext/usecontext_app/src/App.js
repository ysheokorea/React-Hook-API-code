
import './App.css';
import Page from './pages/Page'
import { ColorContext } from './context/ColorContext';
import { UserContext } from './context/UserContext';
import {useState} from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={"사용자"}>
        <ColorContext.Provider value={{isDark, setIsDark}}>
          <Page />
        </ColorContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
