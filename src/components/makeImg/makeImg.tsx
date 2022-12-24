
import { ChangeEvent, FormEvent, useState } from 'react'
import s from './makeImg.module.css'

type MakeImgProps = {
    getImg:(text:string)=>void;
    urls: string[]
}

const MakeImg = ({getImg, urls}: MakeImgProps) => {
    const [text, setText] = useState<string>('')
    const handleTextChange = (e:ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleSubmit = (e:FormEvent<HTMLElement>) => {
        e.preventDefault()
        getImg(text)
        setText('')
    }
    return (
        <>
        <div className={s.container} >
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h3>만들기 원하는 이미지를 말해주세요.</h3>
                <input onChange={handleTextChange} type="text"/>
            </form>
            <button onClick={handleSubmit} >완료</button>
            {urls ? 
                <ul>
                {
                    urls.map((url,index)=> {
                        return <li key={index}>
                            <img src={url} alt="" style={{width:'300px', height:'300px', backgroundColor:'grey'}}  />
                        </li>
                    })
                }  
                </ul>
                : <div  style={{width:'300px', height:'300px', backgroundColor:'grey'}}  ></div> 
            }
        </div>
        </>
    )
}

export default MakeImg;