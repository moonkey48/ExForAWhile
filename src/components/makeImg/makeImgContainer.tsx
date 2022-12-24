import React from 'react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { fetchImage } from '../../api/makeImg';
import MakeImg from './makeImg';

const MakeImgContainer = () => {
    const [urls, setUrls] = useState<string[]>([])
    
    const getImg = async (text:string) => {
        await fetchImage(text)
            .then(data=>{
                console.log(data)
                return data.data.data
            })
            .then(urlList=>{
                let urlListChanged: string[] = []
                urlList.forEach(urlObj=>{
                    if(urlObj.url?.length){
                        urlListChanged.push(urlObj.url)
                    }
                })
                setUrls(urlListChanged)
            })
            .catch(e=>console.log(e))
    }
    
    return <MakeImg getImg={getImg} urls={urls} />
}

export default MakeImgContainer;