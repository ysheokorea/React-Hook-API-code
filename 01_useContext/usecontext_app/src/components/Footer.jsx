import { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';

function Footer () {

    const {isDark, setIsDark} = useContext(ColorContext);

    const isDarkHandler = () => {
        setIsDark(!isDark);
    }

    return (
        <div className="footBtn" style={{
            backgroundColor : isDark ? '#FFFFFF' : '#000000'
        }}>
            <button onClick={isDarkHandler}>button</button>
        </div>
    )
}

export default Footer;