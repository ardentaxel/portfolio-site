import React, {useState, useEffect} from 'react'

const TypeWriter = ({text, delay,onTextRendered,follower, color}) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        if(currentIndex < text.length){
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex +1 );
            }, delay);

            return () => clearTimeout(timeout);
        }
        if((currentIndex >= text.length) && follower){
            onTextRendered();
        }
    },[currentIndex, delay, text, onTextRendered]);

    return <span className='mono' style={{color: color}}>
            {currentText}
        </span>;
}

export default TypeWriter