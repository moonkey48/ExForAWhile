import React, { ChangeEvent, useEffect, useState } from 'react';
import { fetchMood } from '../../api/fetchMood';
import s from './moodColor.module.css'

const MoodColor = () => {
    const [mood, setMood] = useState<string>('fff')
    const [text, setText] = useState<string>('')
    const getMood = async () => {
        await fetchMood(text)
            .then(data=>setMood(data.data.choices[0].text as string))
            .catch(e=>console.log(e))
        setText('')
    }
    const handleTextChange = (e:ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    return (
        <div className={s.container} style={{backgroundColor:`#${mood}`}} >
            <form>
                <h3>오늘의 기분을 한 문장으로 표현해주세요.</h3>
                <input onChange={handleTextChange} type="text"/>
            </form>
            <button onClick={()=>getMood()} >완료</button>
        </div>
    )
}

export default MoodColor;