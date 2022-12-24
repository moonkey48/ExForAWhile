import { ChangeEvent, FormEvent, useState } from 'react';
import { fetchImage } from '../../api/makeImg';
import s from './makeImg.module.css'

const MakeImg = () => {
    const [url, setUrl] = useState<string>('')
    const [text, setText] = useState<string>('')
    const getImg = async () => {
        await fetchImage(text)
            .then(data=>setUrl(data.data.data[0].url as string))
            .catch(e=>console.log(e))
        setText('')
    }
    const handleTextChange = (e:ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleSubmit = (e:FormEvent<HTMLElement>) => {
        e.preventDefault()
        getImg()
    }
    return (
        <>
        <div className={s.container} >
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h3>만들기 원하는 이미지를 말해주세요.</h3>
                <input onChange={handleTextChange} type="text"/>
            </form>
            <button onClick={()=>getImg()} >완료</button>
            <img src={url} style={{width:'300px', height:'300px'}} alt="" />
        </div>
        </>
    )
}

export default MakeImg;