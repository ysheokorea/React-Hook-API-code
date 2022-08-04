import logo from '../logo.svg';

import { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';
import {UserContext} from '../context/UserContext'

function Header() {

    const {isDark} = useContext(ColorContext);
    const user = useContext(UserContext);

    return (
        <header className="App-header" style={{
            backgroundColor : isDark ? '#FFFFFF' : '#000000'
        }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-text" style={{
            color : isDark ? '#000000' : '#FFFFFF'
        }}>
         {user}님 안녕하세요. useHooks API Application
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
}

export default Header;