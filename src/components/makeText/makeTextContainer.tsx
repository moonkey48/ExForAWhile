import React, { useEffect } from 'react';
import { fetchText } from '../../api/chatGPT';

const MakeTextContainer = () => {
    const getText = async () => {
        await fetchText("what is result of 0 + 4?")
        .then(data => console.log(data))
    }
    useEffect(()=>{
        getText();
    })
    return <h1>make text</h1>
    
}

export default MakeTextContainer;